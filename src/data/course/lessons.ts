import type { Lesson } from "./lesson-types";
import { week01Lesson } from "./weeks/week01";
import { week02Lesson } from "./weeks/week02";
import { week03Lesson } from "./weeks/week03";
import { week04Lesson } from "./weeks/week04";
import { week05Lesson } from "./weeks/week05";
import { week06Lesson } from "./weeks/week06";
import { week07Lesson } from "./weeks/week07";
import { week08Lesson } from "./weeks/week08";
export const lessons: Record<number, Lesson> = {
  1: week01Lesson,
  2: week02Lesson,
  3: week03Lesson,
  4: week04Lesson,
  5: week05Lesson,
  6: week06Lesson,
  7: week07Lesson,
  8: week08Lesson,
};
