import { test, expect } from "@playwright/test";
import { weeks, resources, searchWeeks } from "../src/data/course";
import verification from "../docs/video-verification.json";
import { parseProgress, STORAGE_KEY } from "../src/lib/progress-store";

test("published lesson graph and verified video metadata are consistent", () => {
  const published = weeks.filter((w) => w.lesson.status === "published");
  expect(published.map((w) => w.week)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  expect(new Set(resources.map((r) => r.id)).size).toBe(resources.length);
  for (const week of published) {
    const lesson = week.lesson;
    if (lesson.status !== "published") continue;
    expect(lesson.sections.length).toBeGreaterThanOrEqual(6);
    expect(lesson.questions.length).toBeGreaterThanOrEqual(4);
    expect(new Set(lesson.sections.map((s) => s.id)).size).toBe(
      lesson.sections.length,
    );
    expect(new Set(lesson.keyTerms.map((t) => t.id)).size).toBe(
      lesson.keyTerms.length,
    );
    expect(new Set(lesson.questions.map((q) => q.id)).size).toBe(
      lesson.questions.length,
    );
    for (const section of lesson.sections) {
      for (const lang of ["zh", "en"] as const) {
        expect(section.title[lang].length).toBeGreaterThan(5);
        expect(section.content[lang].length).toBeGreaterThanOrEqual(4);
      }
      for (const id of section.termIds)
        expect(
          lesson.keyTerms.some((t) => t.id === id),
          `week ${week.week} term ${id}`,
        ).toBe(true);
      for (const id of section.sourceIds)
        expect(
          resources.some((r) => r.id === id && r.url),
          `week ${week.week} source ${id}`,
        ).toBe(true);
    }
    for (const t of lesson.keyTerms) {
      expect(t.definition.zh.length).toBeGreaterThan(10);
      expect(t.definition.en.length).toBeGreaterThan(30);
    }
    for (const question of lesson.questions) {
      expect(question.options.some((o) => o.id === question.answerId)).toBe(
        true,
      );
      for (const lang of ["zh", "en"] as const) {
        expect(question.feedback[lang].length).toBeGreaterThan(10);
        expect(question.options.every((o) => o.text[lang].length > 0)).toBe(
          true,
        );
      }
    }
    for (const video of week.videos) {
      const evidence = verification.find((v) => v.id === video.youtubeId);
      expect(evidence, `Week ${week.week}: evidence exists`).toBeDefined();
      expect(video.title).toBe(evidence?.title);
      expect(video.channel).toBe(evidence?.channel);
      expect(evidence?.embeddable).toBe(true);
      expect(evidence?.playability).toBe("OK");
      expect(lesson.sections.some((s) => s.id === video.afterSection)).toBe(
        true,
      );
    }
  }
  expect(searchWeeks("乳糖酶").some((w) => w.week === 7)).toBe(true);
});

test("new lesson recall persists across languages, notes edits, reloads and revisits", async ({
  page,
}) => {
  await page.route("https://www.youtube-nocookie.com/**", (r) =>
    r.fulfill({ contentType: "text/html", body: "<html></html>" }),
  );
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));
  for (const n of [2, 3, 4, 5, 6, 7, 8]) {
    const week = weeks[n - 1];
    const lesson = week.lesson;
    if (lesson.status !== "published") throw new Error(`Week ${n} missing`);
    await page.goto(`/course/week/${n}`);
    await page.getByRole("button", { name: "English", exact: true }).click();
    await expect(
      page.getByRole("heading", {
        name: lesson.sections[0].title.en,
        exact: true,
      }),
    ).toBeVisible();
    const video = week.videos[0];
    await page
      .getByRole("navigation", { name: "On this page" })
      .getByRole("link", { name: "Videos · optional", exact: true })
      .click();
    await expect(page).toHaveURL(new RegExp("#video-" + video.youtubeId + "$"));
    const player = page.locator(`#${video.afterSection} iframe`);
    await player.scrollIntoViewIfNeeded();
    await expect(player).toHaveAttribute(
      "src",
      `https://www.youtube-nocookie.com/embed/${video.youtubeId}`,
    );
    await expect(player).toHaveAttribute("title", video.title!);
    await expect(
      page.locator(
        `a[href="https://www.youtube.com/watch?v=${video.youtubeId}"]`,
      ),
    ).toBeVisible();
    const rect = await player.boundingBox();
    expect(rect?.width).toBeGreaterThan(200);
    expect(Math.abs(rect!.width / rect!.height - 16 / 9)).toBeLessThan(0.05);
    const question = lesson.questions[0];
    const group = page.getByRole("group", {
      name: question.prompt.en,
      exact: true,
    });
    const wrong = question.options.find((o) => o.id !== question.answerId)!;
    const right = question.options.find((o) => o.id === question.answerId)!;
    await group
      .getByRole("radio", { name: wrong.text.en, exact: true })
      .check();
    await expect(group.getByRole("status")).toContainText(
      "Let’s think it through",
    );
    await group
      .getByRole("radio", { name: right.text.en, exact: true })
      .check();
    await expect(group.getByRole("status")).toContainText("That’s right");
    await page.locator("#weekly-notes").fill(`第${n}周笔记 — keep this note`);
    await page
      .getByRole("checkbox", { name: "Read this week’s lesson", exact: true })
      .check();
    await page.reload();
    await expect(
      group.getByRole("radio", { name: right.text.en, exact: true }),
    ).toBeChecked();
    await page.getByRole("button", { name: "中文", exact: true }).click();
    await expect(
      page.getByRole("radio", { name: right.text.zh, exact: true }),
    ).toBeChecked();
    await expect(page.locator("#weekly-notes")).toHaveValue(
      `第${n}周笔记 — keep this note`,
    );
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
  }
  const stored = parseProgress(
    await page.evaluate((key) => localStorage.getItem(key), STORAGE_KEY),
  );
  for (let n = 2; n <= 8; n++) {
    expect(stored.weeks[n].notes).toContain(`第${n}周笔记`);
    expect(stored.weeks[n].checks.topics).toBe(true);
    expect(Object.keys(stored.weeks[n].answers ?? {})).toHaveLength(1);
  }
  expect(errors).toEqual([]);
});
