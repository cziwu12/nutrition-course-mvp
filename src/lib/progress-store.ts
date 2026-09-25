import { weeks } from "../data/course";
export type WeekProgress = { checks: Record<string, boolean>; notes: string };
export type Progress = {
  version: 1;
  currentWeek: number;
  weeks: Record<number, WeekProgress>;
  activity: { week: number; text: string; date: string }[];
};
export const STORAGE_KEY = "nutrition-course:progress:v1";
export const emptyProgress = (): Progress => ({
  version: 1,
  currentWeek: 1,
  weeks: {},
  activity: [],
});
export function parseProgress(raw: string | null): Progress {
  if (!raw) return emptyProgress();
  const input = JSON.parse(raw);
  if (
    !input ||
    input.version !== 1 ||
    typeof input.weeks !== "object" ||
    !input.weeks
  )
    throw new Error("无法读取已保存的数据格式");
  const result = emptyProgress();
  result.currentWeek =
    Number.isInteger(input.currentWeek) &&
    input.currentWeek >= 1 &&
    input.currentWeek <= 24
      ? input.currentWeek
      : 1;
  for (const week of weeks) {
    const saved = input.weeks[week.week];
    if (!saved || typeof saved !== "object") continue;
    result.weeks[week.week] = {
      notes: typeof saved.notes === "string" ? saved.notes : "",
      checks: Object.fromEntries(
        week.checklist.map((c) => [c.id, saved.checks?.[c.id] === true]),
      ),
    };
  }
  if (Array.isArray(input.activity))
    result.activity = input.activity
      .filter(
        (a: { week?: number; text?: string; date?: string }) =>
          Number.isInteger(a?.week) &&
          a.week! >= 1 &&
          a.week! <= 24 &&
          typeof a.text === "string" &&
          typeof a.date === "string" &&
          Number.isFinite(Date.parse(a.date)),
      )
      .slice(0, 20);
  return result;
}
export function weekPercentage(progress: Progress, id: number) {
  const required = weeks[id - 1].checklist.filter((c) => c.required);
  return Math.round(
    (required.filter((c) => progress.weeks[id]?.checks[c.id]).length /
      required.length) *
      100,
  );
}
export function courseStats(progress: Progress) {
  const completed = weeks.filter(
    (w) => weekPercentage(progress, w.week) === 100,
  ).length;
  const total = weeks.reduce(
    (n, w) => n + w.checklist.filter((c) => c.required).length,
    0,
  );
  const checked = weeks.reduce(
    (n, w) =>
      n +
      w.checklist.filter(
        (c) => c.required && progress.weeks[w.week]?.checks[c.id],
      ).length,
    0,
  );
  return {
    completed,
    total,
    checked,
    percentage: Math.round((checked / total) * 100),
  };
}
// Replace this adapter to migrate persistence without changing course components.
export const browserStorage = {
  load: () => parseProgress(window.localStorage.getItem(STORAGE_KEY)),
  save: (progress: Progress) =>
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress)),
  reset: () => window.localStorage.removeItem(STORAGE_KEY),
};
