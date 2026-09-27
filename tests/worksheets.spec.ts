import { test, expect } from "@playwright/test";
import { STORAGE_KEY, parseProgress } from "../src/lib/progress-store";
import { worksheets } from "../src/data/course/worksheets";
test("worksheet drafts preserve notes, quizzes and language and export a copy", async ({
  page,
}) => {
  await page.route("https://www.youtube-nocookie.com/**", (r) =>
    r.fulfill({ contentType: "text/html", body: "<html></html>" }),
  );
  await page.goto("/course/week/17");
  await page.getByRole("button", { name: "English", exact: true }).click();
  await page.locator("#weekly-notes").fill("Existing personal note");
  await page
    .getByLabel("Breakfast record", { exact: true })
    .fill("08:00 oats and milk; amount approximate");
  await page
    .getByLabel("Drink record", { exact: true })
    .fill("Water; coffee with milk");
  await page
    .getByRole("checkbox", { name: "Read this week’s lesson", exact: true })
    .check();
  await page.reload();
  await expect(
    page.getByLabel("Breakfast record", { exact: true }),
  ).toHaveValue("08:00 oats and milk; amount approximate");
  await expect(page.locator("#weekly-notes")).toHaveValue(
    "Existing personal note",
  );
  await page.getByRole("button", { name: "中文", exact: true }).click();
  await expect(page.getByLabel("早餐记录", { exact: true })).toHaveValue(
    "08:00 oats and milk; amount approximate",
  );
  const [download] = await Promise.all([
    page.waitForEvent("download"),
    page.getByRole("button", { name: "下载文字副本", exact: true }).click(),
  ]);
  expect(download.suggestedFilename()).toBe("nutrition-week-17-worksheet.txt");
  const stream = await download.createReadStream();
  const chunks = [];
  for await (const chunk of stream!) chunks.push(chunk);
  expect(Buffer.concat(chunks).toString("utf8")).toContain(
    "08:00 oats and milk",
  );
  await page.goto("/course/week/20");
  await page
    .getByLabel("星期一", { exact: true })
    .fill("Rice, tofu and vegetables");
  await page.reload();
  await expect(page.getByLabel("星期一", { exact: true })).toHaveValue(
    "Rice, tofu and vegetables",
  );
  const saved = parseProgress(
    await page.evaluate((key) => localStorage.getItem(key), STORAGE_KEY),
  );
  expect(saved.weeks[17].notes).toBe("Existing personal note");
  expect(saved.weeks[17].checks.topics).toBe(true);
  expect(saved.weeks[17].worksheet?.drinks).toBe("Water; coffee with milk");
  expect(saved.weeks[20].worksheet?.mon).toBe("Rice, tofu and vegetables");
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
});
test("worksheet parser accepts old progress and discards invalid or unknown fields", () => {
  const saved = parseProgress(
    JSON.stringify({
      version: 1,
      weeks: {
        17: {
          notes: "keep",
          checks: {},
          worksheet: { breakfast: "valid", lunch: 9, unknown: "discard" },
        },
        1: { notes: "old", checks: {} },
      },
    }),
  );
  expect(saved.weeks[17].worksheet).toEqual({ breakfast: "valid" });
  expect(saved.weeks[1].notes).toBe("old");
  expect(Object.keys(worksheets[24].fields)).toHaveLength(13);
});

test("family guide survives completion and refresh, exports all sections, and resets only after confirmation", async ({
  page,
}) => {
  await page.goto("/course/week/24");
  for (const field of worksheets[24].fields)
    await page
      .getByLabel(field.label.zh, { exact: true })
      .fill(`家庭草稿：${field.id}`);
  for (const name of ["阅读本周主题", "完成实践任务", "完成本周复习"])
    await page.getByRole("checkbox", { name, exact: true }).check();
  await page.reload();
  await expect(
    page.getByRole("status").filter({ hasText: "毕业项目已完成" }),
  ).toBeVisible();
  for (const field of worksheets[24].fields)
    await expect(page.getByLabel(field.label.zh, { exact: true })).toHaveValue(
      `家庭草稿：${field.id}`,
    );
  const [download] = await Promise.all([
    page.waitForEvent("download"),
    page.getByRole("button", { name: "下载文字副本", exact: true }).click(),
  ]);
  const stream = await download.createReadStream();
  const chunks = [];
  for await (const chunk of stream!) chunks.push(chunk);
  const content = Buffer.concat(chunks).toString("utf8");
  for (const field of worksheets[24].fields)
    expect(content).toContain(`家庭草稿：${field.id}`);
  await page.goto("/settings");
  await page.getByRole("button", { name: "重置课程进度", exact: true }).click();
  expect(
    parseProgress(
      await page.evaluate((key) => localStorage.getItem(key), STORAGE_KEY),
    ).weeks[24].worksheet?.sources,
  ).toBe("家庭草稿：sources");
  await page.getByRole("button", { name: "确认重置全部记录" }).click();
  await page.goto("/course/week/24");
  await expect(
    page.getByLabel(worksheets[24].fields[0].label.zh, { exact: true }),
  ).toHaveValue("");
});
