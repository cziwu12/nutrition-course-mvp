import type { Week } from "./types";
import { videosByWeek } from "./videos";
import { seeds } from "./curriculum";
import { week01Lesson } from "./weeks/week01";
export type { Week, Resource, Video } from "./types";
export * from "./lesson-types";
export { phases } from "./phases";
export { resources } from "./resources";
export const weeks: Week[] = seeds.map(
  (
    [
      titleZh,
      titleEn,
      description,
      terms,
      goals,
      practicalTask,
      reflection,
      ids,
    ],
    i,
  ) => {
    const topics = terms.split("|").map((t) => {
      const [en, zh] = t.split(":");
      return { en, zh };
    });
    const resourceIds = ids.split(",");
    return {
      lesson: i === 0 ? week01Lesson : { status: "developing" },
      week: i + 1,
      month: Math.floor(i / 4) + 1,
      titleZh,
      titleEn,
      description,
      topics,
      vocabulary: topics.slice(0, 6),
      objectives: goals.split("|"),
      practicalTask,
      reflection,
      resourceIds: i === 0 ? week01Lesson.sourceIds : resourceIds,
      videos: videosByWeek[i + 1]?.length ? videosByWeek[i + 1] : [{}],
      checklist: [
        { id: "topics", label: "阅读本周主题", required: true },
        { id: "resources", label: "查看推荐资源", required: false },
        { id: "videos", label: "观看视频", required: false },
        { id: "practice", label: "完成实践任务", required: true },
        { id: "review", label: "完成本周复习", required: true },
      ],
    };
  },
);
export const disclaimer =
  "本课程仅供教育学习，不能替代注册营养师、医生或其他合格医疗专业人士的建议。涉及疾病、怀孕、药物或营养补充剂，请寻求合适的专业指导。";
export const disclaimerEn =
  "This course is for education only and does not replace advice from a registered dietitian, nutritionist, doctor, or other qualified healthcare professional.";
export function searchWeeks(query: string) {
  const q = query.toLowerCase().replace(/\s/g, "");
  return weeks.filter((w) =>
    [
      w.titleZh,
      w.titleEn,
      w.description,
      ...w.topics.flatMap((t) => [t.zh, t.en]),
    ]
      .join(" ")
      .toLowerCase()
      .replace(/\s/g, "")
      .includes(q),
  );
}
