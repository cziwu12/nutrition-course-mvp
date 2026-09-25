import { test, expect } from "@playwright/test";
import { weeks, resources, searchWeeks } from "../src/data/course";
import {
  parseProgress,
  emptyProgress,
  courseStats,
  weekPercentage,
  STORAGE_KEY,
} from "../src/lib/progress-store";

test("curriculum has 24 unique weeks and valid resource references", () => {
  expect(weeks.map((w) => w.week)).toEqual(
    Array.from({ length: 24 }, (_, i) => i + 1),
  );
  for (const week of weeks) {
    expect(week.objectives.length).toBeGreaterThan(0);
    expect(week.practicalTask.length).toBeGreaterThan(0);
    for (const id of week.resourceIds)
      expect(resources.some((r) => r.id === id)).toBeTruthy();
  }
  for (const term of ["protein", "维生素D", "血糖"])
    expect(searchWeeks(term).length).toBeGreaterThan(0);
  const p = emptyProgress();
  p.weeks[7] = {
    notes: "test",
    checks: { topics: true, practice: true, review: true },
  };
  expect(weekPercentage(p, 7)).toBe(100);
  expect(courseStats(p).completed).toBe(1);
  expect(parseProgress(JSON.stringify(p)).weeks[7].notes).toBe("test");
  expect(() => parseProgress("broken")).toThrow();
  expect(
    parseProgress(JSON.stringify({ ...p, currentWeek: 99 })).currentWeek,
  ).toBe(1);
});

test("learning, notes, resume, search, progress and reset survive navigation", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  await expect(
    page.getByRole("heading", { name: /6个月家庭营养与健康\s*自学课程/ }),
  ).toBeVisible();
  await page.getByRole("link", { name: "继续学习", exact: true }).click();
  await expect(page).toHaveURL(/\/course\/week\/1$/);
  await page
    .getByRole("checkbox", { name: "阅读本周主题", exact: true })
    .check();
  await page
    .getByRole("checkbox", { name: "查看推荐资源", exact: true })
    .check();
  await page.getByRole("checkbox", { name: "我已完成本周实践任务" }).check();
  await expect(
    page.getByRole("checkbox", { name: "完成实践任务", exact: true }),
  ).toBeChecked();
  await page
    .getByRole("checkbox", { name: "完成本周复习", exact: true })
    .check();
  await page
    .getByLabel("记下你的发现、疑问，或本周实践的结果。")
    .fill("今天学到：食物与营养素不同。\n下一餐试试全谷物。");
  await expect(
    page.getByRole("status").filter({ hasText: "本周已完成" }),
  ).toBeVisible();
  await page.reload();
  await expect(page.locator("#weekly-notes")).toHaveValue(
    "今天学到：食物与营养素不同。\n下一餐试试全谷物。",
  );
  await expect(
    page.getByRole("checkbox", { name: "阅读本周主题", exact: true }),
  ).toBeChecked();
  await page.getByRole("link", { name: /下一周/ }).click();
  await expect(page).toHaveURL(/\/2$/);
  await page.goto("/");
  await expect(page.locator(".current-body")).toContainText("碳水化合物");
  await expect(page.locator(".overall-body")).toContainText("1 / 24 周");
  await page.getByRole("textbox", { name: "搜索课程与资源" }).fill("protein");
  await page
    .locator(".search-results")
    .getByRole("link")
    .filter({ hasText: "第 3 周" })
    .click();
  await expect(page).toHaveURL(/\/3$/);
  await page.goto("/progress");
  await expect(page.locator(".stats-grid")).toContainText("1 / 24 周");
  await page.goto("/settings");
  await page.getByRole("button", { name: "重置课程进度", exact: true }).click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await page.getByRole("button", { name: "保留我的记录" }).click();
  await page.goto("/course/week/1");
  await expect(page.locator("#weekly-notes")).not.toBeEmpty();
  await page.goto("/settings");
  await page.getByRole("button", { name: "重置课程进度", exact: true }).click();
  await page.getByRole("button", { name: "确认重置全部记录" }).click();
  await expect(page.getByRole("dialog")).not.toBeVisible();
  await page.goto("/course/week/1");
  await expect(page.locator("#weekly-notes")).toBeEmpty();
  await expect(
    page.getByRole("checkbox", { name: "阅读本周主题", exact: true }),
  ).not.toBeChecked();
  expect(errors).toEqual([]);
});

test("all routes, mobile overflow, resources and invalid weeks", async ({
  page,
}, testInfo) => {
  for (const route of [
    "/",
    "/course",
    "/resources",
    "/progress",
    "/settings",
    ...weeks.map((w) => `/course/week/${w.week}`),
  ]) {
    const response = await page.goto(route);
    expect(response?.status(), route).toBe(200);
    await expect(page.locator("h1")).toBeVisible();
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
      route,
    ).toBe(true);
  }
  await page.goto("/resources?topic=维生素D");
  await expect(page.locator("#resource-query")).toHaveValue("维生素D");
  await expect(
    page.getByRole("heading", { name: "维生素与矿物质资料库" }),
  ).toBeVisible();
  await page.getByLabel("搜索主题或关键词").fill("unlikely-no-match");
  await expect(
    page.getByRole("heading", { name: "暂时没有匹配的资源" }),
  ).toBeVisible();
  await page.getByRole("button", { name: "清除筛选" }).click();
  await page.getByLabel("按来源筛选").selectOption("YouTube");
  await expect(
    page.getByRole("heading", { name: "课程视频待补充" }),
  ).toBeVisible();
  expect(await page.locator(".resource-card a").count()).toBe(0);
  await page.goto("/course/week/25");
  await expect(
    page.getByRole("heading", { name: "没有找到这一课" }),
  ).toBeVisible();
  await page.goto("/");
  await page.screenshot({
    path: `test-results/dashboard-${testInfo.project.name}.png`,
    fullPage: true,
  });
  await page.goto("/course/week/3");
  await page.screenshot({
    path: `test-results/week-${testInfo.project.name}.png`,
    fullPage: true,
  });
});

test("corrupt storage is protected, reset restores functionality", async ({
  page,
}) => {
  await page.goto("/");
  await page.evaluate(
    (key) => localStorage.setItem(key, "corrupt"),
    STORAGE_KEY,
  );
  await page.reload();
  await expect(page.locator(".notice[role=alert]")).toContainText("无法读取");
  expect(
    await page.evaluate((key) => localStorage.getItem(key), STORAGE_KEY),
  ).toBe("corrupt");
  await page.goto("/settings");
  await page.getByRole("button", { name: "重置课程进度", exact: true }).click();
  await page.getByRole("button", { name: "确认重置全部记录" }).click();
  await expect(page.locator(".notice[role=alert]")).toHaveCount(0);
});

test("progress synchronizes to another open tab", async ({ page, context }) => {
  await page.goto("/course/week/3");
  const other = await context.newPage();
  await other.goto("/course/week/3");
  await page
    .getByRole("checkbox", { name: "阅读本周主题", exact: true })
    .check();
  await expect(
    other.getByRole("checkbox", { name: "阅读本周主题", exact: true }),
  ).toBeChecked();
  await other.close();
});

test("graduation appears when final week is complete", async ({ page }) => {
  await page.goto("/");
  const p = emptyProgress();
  p.currentWeek = 24;
  p.weeks[24] = {
    notes: "家庭营养指南",
    checks: Object.fromEntries(
      weeks[23].checklist.filter((c) => c.required).map((c) => [c.id, true]),
    ),
  };
  await page.evaluate(
    ({ key, value }) => localStorage.setItem(key, JSON.stringify(value)),
    { key: STORAGE_KEY, value: p },
  );
  await page.goto("/course/week/24");
  await expect(
    page.getByRole("status").filter({ hasText: "毕业项目已完成" }),
  ).toBeVisible();
});

test("different open weeks do not overwrite each other repeatedly", async ({
  page,
  context,
}) => {
  await page.goto("/course/week/1");
  const other = await context.newPage();
  await other.goto("/course/week/3");
  await expect
    .poll(() =>
      page.evaluate(
        (key) => JSON.parse(localStorage.getItem(key) ?? "null")?.currentWeek,
        STORAGE_KEY,
      ),
    )
    .toBe(3);
  await page
    .getByRole("checkbox", { name: "阅读本周主题", exact: true })
    .check();
  await expect
    .poll(() =>
      page.evaluate(
        (key) => JSON.parse(localStorage.getItem(key) ?? "null")?.currentWeek,
        STORAGE_KEY,
      ),
    )
    .toBe(3);
  await other.goto("/settings");
  await other
    .getByRole("button", { name: "重置课程进度", exact: true })
    .click();
  await other.getByRole("button", { name: "确认重置全部记录" }).click();
  await expect(
    page.getByRole("checkbox", { name: "阅读本周主题", exact: true }),
  ).not.toBeChecked();
  expect(
    await page.evaluate((key) => localStorage.getItem(key), STORAGE_KEY),
  ).toBeNull();
  await other.close();
});

test("unavailable storage writes show an honest warning", async ({ page }) => {
  await page.goto("/course/week/1");
  await page.evaluate(() => {
    Storage.prototype.setItem = () => {
      throw new DOMException("Quota reached", "QuotaExceededError");
    };
  });
  await page.locator("#weekly-notes").fill("需要保留副本的笔记");
  await expect(page.locator(".notice")).toContainText("未能保存");
  await expect(page.locator(".saved-state")).toHaveText("尚未保存");
  await expect(page.locator("#weekly-notes")).toHaveValue("需要保留副本的笔记");
});
