"use client";
import { useLanguage } from "@/lib/language";
import { phases } from "@/data/course";
import { CoursePhaseCard } from "@/components/course";
export default function CoursePage() {
  const { t } = useLanguage();
  return (
    <>
      <div className="page-top">
        <div>
          <span className="eyebrow">THE LEARNING PATH</span>
          <h1>
            {t("24周，从知识走向餐桌", "24 weeks, from knowledge to the table")}
          </h1>
          <p>
            {t(
              "六个阶段，按自己的节奏学习。你也可以随时探索感兴趣的一周。",
              "Six phases at your own pace. Start with the complete Week 1 lesson; the remaining lessons are being developed.",
            )}
          </p>
        </div>
      </div>
      <div className="roadmap-grid full">
        {phases.map((p) => (
          <CoursePhaseCard key={p.month} phase={p} />
        ))}
      </div>
    </>
  );
}
