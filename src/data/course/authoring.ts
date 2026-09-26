import type {
  Lesson,
  LessonSection,
  KeyTerm,
  Question,
  Localized,
  LessonBlock,
} from "./lesson-types";
export const l = <T>(zh: T, en: T): Localized<T> => ({ zh, en });
export const p = (zh: string, en: string): Localized<LessonBlock> =>
  l({ type: "paragraph", text: zh }, { type: "paragraph", text: en });
export const example = (
  zh: string,
  en: string,
  bodyZh: string,
  bodyEn: string,
): Localized<LessonBlock> =>
  l(
    { type: "example", title: zh, body: bodyZh },
    { type: "example", title: en, body: bodyEn },
  );
export const call = (
  zh: string,
  en: string,
  bodyZh: string,
  bodyEn: string,
  variant: "important" | "remember" | "warning" = "remember",
): Localized<LessonBlock> =>
  l(
    { type: "callout", variant, title: zh, text: bodyZh },
    { type: "callout", variant, title: en, text: bodyEn },
  );
export const compare = (
  columns: { title: Localized; items: Localized[] }[],
): Localized<LessonBlock> =>
  l(
    {
      type: "comparison",
      columns: columns.map((c) => ({
        title: c.title.zh,
        items: c.items.map((i) => i.zh),
      })),
    },
    {
      type: "comparison",
      columns: columns.map((c) => ({
        title: c.title.en,
        items: c.items.map((i) => i.en),
      })),
    },
  );
export const section = (
  id: string,
  title: Localized,
  blocks: Localized<LessonBlock>[],
  termIds: string[],
  sourceIds: string[],
): LessonSection => ({
  id,
  title,
  content: l(
    blocks.map((b) => b.zh),
    blocks.map((b) => b.en),
  ),
  termIds,
  sourceIds,
});
export const term = (
  id: string,
  zh: string,
  en: string,
  dzh: string,
  den: string,
): KeyTerm => ({ id, term: l(zh, en), definition: l(dzh, den) });
export const q = (
  id: string,
  prompt: Localized,
  options: Localized[],
  answer: number,
  feedback: Localized,
): Question => ({
  id,
  prompt,
  options: options.map((text, i) => ({ id: String(i), text })),
  answerId: String(answer),
  feedback,
});
export function lesson(input: Omit<Lesson, "status" | "reviewedAt">): Lesson {
  return {
    status: "published",
    reviewedAt: "2026-09-27",
    ...input,
    sourceIds: [
      ...new Set([
        ...input.sourceIds,
        ...input.sections.flatMap((section) => section.sourceIds),
      ]),
    ],
  };
}
