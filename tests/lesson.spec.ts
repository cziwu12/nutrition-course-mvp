import { test, expect } from "@playwright/test";
import { weeks, resources } from "../src/data/course";
import {
  STORAGE_KEY,
  parseProgress,
  weekPercentage,
} from "../src/lib/progress-store";
import { youtubeEmbed } from "../src/components/course";

test("authored lessons have complete bilingual content, terms and references", () => {
  const lesson = weeks[0].lesson;
  if (lesson.status !== "published") throw new Error("Week 1 missing");
  expect(lesson.sections).toHaveLength(6);
  expect(lesson.summary.zh).toHaveLength(5);
  expect(lesson.summary.en).toHaveLength(5);
  for (const section of lesson.sections) {
    expect(section.content.zh.length).toBeGreaterThanOrEqual(4);
    expect(section.content.en.length).toBeGreaterThanOrEqual(4);
    for (const id of section.termIds)
      expect(lesson.keyTerms.some((t) => t.id === id)).toBeTruthy();
    for (const id of section.sourceIds)
      expect(resources.some((r) => r.id === id && r.url)).toBeTruthy();
  }
  for (const term of lesson.keyTerms) {
    expect(term.definition.zh.length).toBeGreaterThan(10);
    expect(term.definition.en.length).toBeGreaterThan(30);
  }
  for (const q of lesson.questions)
    expect(q.options.some((o) => o.id === q.answerId)).toBeTruthy();
  for (const week of weeks) {
    expect(week.checklist.find((c) => c.id === "resources")?.required).toBe(
      false,
    );
    if (week.week > 1) expect(week.lesson.status).toBe("developing");
  }
  const old = {
    version: 1,
    currentWeek: 3,
    weeks: {
      1: {
        notes: "原来的笔记",
        checks: {
          topics: true,
          practice: true,
          review: true,
          resources: false,
          videos: false,
        },
      },
      3: { notes: "第三周", checks: { topics: true } },
    },
    activity: [],
  };
  const loaded = parseProgress(JSON.stringify(old));
  expect(loaded.weeks[1].notes).toBe("原来的笔记");
  expect(loaded.currentWeek).toBe(3);
  expect(weekPercentage(loaded, 1)).toBe(100);
  // Synthetic identifier only tests URL parsing; it is not a recommended video.
  expect(youtubeEmbed("https://youtu.be/abcdefghijk")).toBe(
    "https://www.youtube-nocookie.com/embed/abcdefghijk",
  );
  expect(youtubeEmbed("https://example.com/watch?v=abcdefghijk")).toBeNull();
});

test("Week 1 language, recall, anchors and legacy progress work together", async ({
  page,
}, info) => {
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));
  page.on("console", (m) => {
    if (m.type() === "error") errors.push(m.text());
  });
  await page.goto("/course/week/1");
  await page.evaluate(
    (key) =>
      localStorage.setItem(
        key,
        JSON.stringify({
          version: 1,
          currentWeek: 1,
          weeks: {
            1: {
              notes: "保留原来的笔记",
              checks: {
                topics: true,
                practice: false,
                review: false,
                resources: true,
              },
            },
          },
          activity: [],
        }),
      ),
    STORAGE_KEY,
  );
  await page.reload();
  await expect(page.locator("#weekly-notes")).toHaveValue("保留原来的笔记");
  await page.getByRole("button", { name: "English", exact: true }).click();
  await expect(
    page.getByRole("heading", { name: "1.1 What is nutrition?", exact: true }),
  ).toBeVisible();
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await expect(
    page.getByRole("checkbox", {
      name: "Read this week’s lesson",
      exact: true,
    }),
  ).toBeChecked();
  await page.reload();
  await expect(
    page.getByRole("button", { name: "English", exact: true }),
  ).toHaveAttribute("aria-pressed", "true");
  await page
    .getByRole("navigation", { name: "On this page" })
    .getByRole("link", {
      name: "1.5 RDA, EAR and UL: three different questions",
      exact: true,
    })
    .click();
  await expect(page).toHaveURL(/#reference-values$/);
  await expect(
    page.getByRole("heading", {
      name: "UL is not a recommended target",
      exact: true,
    }),
  ).toBeVisible();
  await page
    .locator("#reference-values .section-term-links")
    .getByRole("link", { name: "UL", exact: true })
    .click();
  await expect(page).toHaveURL(/#term-ul$/);
  await page
    .getByRole("navigation", { name: "On this page" })
    .getByRole("link", { name: "Quick checks", exact: true })
    .click();
  const ul = page.getByRole("group", {
    name: "Is UL the amount you should try to reach every day?",
  });
  await ul
    .getByRole("radio", {
      name: "Yes, closer to the limit is better.",
      exact: true,
    })
    .check();
  await expect(ul.getByRole("status")).toContainText("Let’s think it through");
  await ul
    .getByRole("radio", {
      name: "No. UL is an upper-limit reference, not a recommended target.",
      exact: true,
    })
    .check();
  await expect(ul.getByRole("status")).toContainText("That’s right");
  await page
    .locator("#weekly-notes")
    .fill("保留原来的笔记 / Food is not a single nutrient.");
  await page
    .getByRole("checkbox", {
      name: "I have completed this week’s practical task",
      exact: true,
    })
    .check();
  await page
    .getByRole("checkbox", { name: "Review this week", exact: true })
    .check();
  await expect(page.locator(".success")).toContainText("Week complete");
  await page.reload();
  await expect(ul.getByRole("radio", { name: /No. UL/ })).toBeChecked();
  await page.getByRole("button", { name: "中文", exact: true }).click();
  await expect(
    page.getByRole("radio", {
      name: "不是，UL 是上限参考，不是推荐目标。",
      exact: true,
    }),
  ).toBeChecked();
  await expect(page.locator("#weekly-notes")).toHaveValue(
    "保留原来的笔记 / Food is not a single nutrient.",
  );
  await expect(page.locator("#lesson-references")).toContainText(
    "外部阅读均为选修",
  );
  await expect(page.locator("#lesson-videos iframe")).toHaveCount(0);
  await expect(page.locator(".video-placeholder")).toBeVisible();
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
  await page.goto("/course/week/2");
  await expect(
    page.getByRole("heading", { name: "完整讲义正在编写", exact: true }),
  ).toBeVisible();
  await page.getByRole("button", { name: "English", exact: true }).click();
  await expect(
    page.getByRole("heading", {
      name: "The full lesson is being developed",
      exact: true,
    }),
  ).toBeVisible();
  await expect(page.locator(".practical")).toContainText("rice noodles");
  await page.goto("/course/week/1");
  await expect(
    page.getByRole("heading", { name: "1.1 What is nutrition?", exact: true }),
  ).toBeVisible();
  await page.screenshot({
    path: `test-results/lesson-en-${info.project.name}.png`,
  });
  await page.locator("#reference-values").scrollIntoViewIfNeeded();
  await page.screenshot({
    path: `test-results/reference-en-${info.project.name}.png`,
  });
  await page.getByRole("button", { name: "中文", exact: true }).click();
  await page.locator("#macronutrients").scrollIntoViewIfNeeded();
  await page.screenshot({
    path: `test-results/lesson-zh-${info.project.name}.png`,
  });
  expect(errors).toEqual([]);
});
