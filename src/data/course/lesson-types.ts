export type Language = "zh" | "en";
export type Localized<T = string> = Record<Language, T>;
export type LessonBlock =
  | { type: "paragraph" | "heading"; text: string }
  | { type: "bulletList"; items: string[] }
  | {
      type: "callout";
      variant: "important" | "example" | "warning" | "remember";
      title: string;
      text: string;
    }
  | { type: "comparison"; columns: { title: string; items: string[] }[] }
  | { type: "example"; title: string; body: string };
export type KeyTerm = {
  id: string;
  term: Localized;
  definition: Localized;
  example?: Localized;
};
export type Question = {
  id: string;
  prompt: Localized;
  options: { id: string; text: Localized }[];
  answerId: string;
  feedback: Localized;
};
export type LessonSection = {
  id: string;
  title: Localized;
  content: Localized<LessonBlock[]>;
  termIds: string[];
  sourceIds: string[];
};
export type Lesson = {
  status: "published";
  introduction: Localized;
  objectives: Localized<string[]>;
  sections: LessonSection[];
  keyTerms: KeyTerm[];
  questions: Question[];
  practicalTask: Localized;
  summary: Localized<string[]>;
  sourceIds: string[];
  reviewedAt: string;
};
export type LessonState = Lesson | { status: "developing" };
