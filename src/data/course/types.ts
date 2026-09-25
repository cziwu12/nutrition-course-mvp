import type { LessonState } from "./lesson-types";
export type Resource = {
  id: string;
  title: string;
  source: string;
  description: string;
  titleEn?: string;
  descriptionEn?: string;
  url?: string;
  type: "article" | "official guide" | "video" | "interactive tool" | "PDF";
  tags: string[];
  weeks: number[];
};
export type Video = {
  title?: string;
  youtubeId?: string;
  titleEn?: string;
  descriptionEn?: string;
  channel?: string;
  url?: string;
  description?: string;
};
export type Week = {
  lesson: LessonState;
  week: number;
  month: number;
  titleZh: string;
  titleEn: string;
  description: string;
  objectives: string[];
  topics: { en: string; zh: string }[];
  vocabulary: { en: string; zh: string }[];
  practicalTask: string;
  reflection: string;
  resourceIds: string[];
  videos: Video[];
  checklist: { id: string; label: string; required: boolean }[];
};
