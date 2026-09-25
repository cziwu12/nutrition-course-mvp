"use client";
import { diaryExample } from "@/data/course/activities";
import Link from "next/link";
import { useEffect } from "react";
import { Week, resources, disclaimer, disclaimerEn } from "@/data/course";
import { useCourseProgress } from "@/lib/progress";
import { useLanguage } from "@/lib/language";
import {
  Checklist,
  PracticalTaskCard,
  ProgressBar,
  ResourceCard,
  VideoCard,
  WeekNavigation,
} from "./course";
import {
  LessonContents,
  LessonSections,
  KeyTerms,
  QuickChecks,
} from "./lesson";
export function WeekDetail({ week }: { week: Week }) {
  const { progress, ready, error, visit, note, percent } = useCourseProgress();
  const { language, t } = useLanguage();
  useEffect(() => {
    if (ready) visit(week.week);
  }, [ready, week.week, visit]);
  const lesson = week.lesson.status === "published" ? week.lesson : null;
  const value = percent(week.week);
  return (
    <>
      <Link href="/course" className="text-link back-link">
        ← {t("返回课程路线", "Back to course")}
      </Link>
      <div className="page-top lesson-page-top">
        <div>
          <span className="eyebrow">
            MONTH {String(week.month).padStart(2, "0")} / WEEK{" "}
            {String(week.week).padStart(2, "0")}
          </span>
          <h1>
            {t(week.titleZh, week.titleEn)}
            <span
              className="english-title"
              lang={language === "zh" ? "en" : "zh-Hans"}
            >
              {t(week.titleEn, week.titleZh)}
            </span>
          </h1>
          <p>
            {lesson
              ? t(
                  "从熟悉的一餐开始，理解身体需要什么。",
                  "Start with a familiar meal. Understand what your body needs.",
                )
              : t(
                  week.description,
                  "Explore this week’s curriculum while the full lesson is being developed.",
                )}
          </p>
        </div>
        <span className="quiet-badge">
          {t(`第 ${week.week} / 24 周`, `Week ${week.week} of 24`)}
        </span>
      </div>
      {value === 100 && (
        <div className="success" role="status">
          {week.week === 24
            ? t(
                "✧ 毕业项目已完成！你的家庭营养指南，是把知识带回生活的第一步。",
                "✧ Graduation project completed! Bring your learning to the family table.",
              )
            : t(
                "✓ 本周已完成。记得把学到的一点知识，带到下一餐。",
                "✓ Week complete. Bring one thing you learned to your next meal.",
              )}
        </div>
      )}
      <div className={`study-layout ${lesson ? "" : "developing-layout"}`}>
        {lesson && (
          <aside className="study-sidebar">
            <LessonContents lesson={lesson} />
            <div className="reading-progress">
              <div className="progress-label">
                <span>{t("本周进度", "This week")}</span>
                <strong>{value}%</strong>
              </div>
              <ProgressBar
                value={value}
                label={t("本周进度", "Week progress")}
              />
              <small>
                {t(
                  "按自己的节奏，分几次学完。",
                  "Take your time. Study in several sittings.",
                )}
              </small>
            </div>
          </aside>
        )}
        <article
          className="lesson-reader"
          lang={language === "zh" ? "zh-Hans" : "en"}
        >
          <section className="lesson-intro reading-section">
            <span className="eyebrow">LEARN IT. UNDERSTAND IT. USE IT.</span>
            {lesson && (
              <p className="lesson-lead">{lesson.introduction[language]}</p>
            )}
            <h2>{t("本周学习目标", "Learning objectives")}</h2>
            <p>
              {t(
                "完成本周后，你应该能够：",
                "By the end of this week, you should be able to:",
              )}
            </p>
            <ul className="objectives">
              {(lesson
                ? lesson.objectives[language]
                : language === "zh"
                  ? week.objectives
                  : week.topics
                      .slice(0, 4)
                      .map((topic) => `Recognise and discuss ${topic.en}.`)
              ).map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ul>
          </section>
          {lesson ? (
            <LessonSections lesson={lesson} />
          ) : (
            <section className="reading-section development-notice">
              <span className="pill">
                {t("课程编写中", "LESSON IN DEVELOPMENT")}
              </span>
              <h2>
                {t("完整讲义正在编写", "The full lesson is being developed")}
              </h2>
              <p>
                {t(
                  "本周已保留原有学习计划、实践任务和你的记录。详细中英讲义、术语定义与自测尚未发布；你可以先体验第1周的完整课程。",
                  "Your original curriculum, practical task and learning records are preserved. Detailed bilingual teaching, definitions and quick checks are not yet published for this week. Week 1 is ready to study.",
                )}
              </p>
              <Link className="text-link" href="/course/week/1">
                {t("学习第1周完整讲义 →", "Study the complete Week 1 lesson →")}
              </Link>
              <h3>{t("本周概念预览", "Curriculum preview")}</h3>
              <div className="topics">
                {week.topics.map((topic) => (
                  <div key={topic.en}>
                    <div>
                      <strong>{topic[language]}</strong>
                      <small>{topic[language === "zh" ? "en" : "zh"]}</small>
                    </div>
                  </div>
                ))}
              </div>
              <blockquote>
                {language === "zh"
                  ? week.reflection
                  : "Detailed explanations will be added here after the Week 1 benchmark is reviewed."}
              </blockquote>
            </section>
          )}
          {lesson && <KeyTerms lesson={lesson} />}
          <section id="lesson-videos" className="reading-section">
            <h2>{t("视频辅助学习", "Watch and revisit")}</h2>
            {week.videos.map((video, i) => (
              <VideoCard key={i} video={video} />
            ))}
          </section>
          {lesson && <QuickChecks lesson={lesson} week={week.week} />}
          <section id="lesson-practice" className="reading-section">
            <PracticalTaskCard week={week} />
            {week.week === 17 && (
              <div className="diary-example">
                <h3>{t("饮食日记示例", "Food diary example")}</h3>
                <p>
                  {t(
                    "这是记录方式示例，并非个人饮食处方。",
                    "This illustrates recording, not a personal eating prescription.",
                  )}
                </p>
                {diaryExample.map((row) => (
                  <div key={row.meal.en}>
                    <strong>{row.meal[language]}</strong>
                    <span>{row.food[language]}</span>
                    <small>
                      {t(
                        "另记：份量、时间、烹调方法",
                        "Also record amounts, time and cooking method",
                      )}
                    </small>
                  </div>
                ))}
              </div>
            )}
          </section>
          {lesson && (
            <section
              id="lesson-summary"
              className="reading-section lesson-summary"
            >
              <span className="eyebrow">TAKE IT WITH YOU</span>
              <h2>
                {t(
                  "本周结束，你应该理解……",
                  "By the end of this week, you should understand…",
                )}
              </h2>
              <ul>
                {lesson.summary[language].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>
                {t(
                  "试着不看正文，用自己的话向家人解释其中一点。然后在下方勾选复习完成。",
                  "Try explaining one of these ideas to a family member in your own words, without looking back. Then mark your review complete below.",
                )}
              </p>
            </section>
          )}
          <section id="lesson-references" className="reading-section">
            <h2>{t("资料来源与延伸阅读", "Sources & further reading")}</h2>
            <p>
              {t(
                "以下资料支持本课内容，供有兴趣时查阅。外部阅读均为选修，不影响完成进度。",
                "These sources support the lesson and are here if you want to explore further. External reading is optional and does not affect completion.",
              )}
            </p>
            {lesson && (
              <small className="muted">
                {t("内容核验日期：", "Content checked: ")}
                {lesson.reviewedAt}
              </small>
            )}
            <div className="reference-list">
              {resources
                .filter((r) => week.resourceIds.includes(r.id))
                .map((r) => (
                  <ResourceCard key={r.id} resource={r} />
                ))}
            </div>
          </section>
          <section id="lesson-completion" className="reading-section">
            <div className="progress-label">
              <h2>{t("本周学习清单", "Your weekly checklist")}</h2>
              <strong>{value}%</strong>
            </div>
            <ProgressBar value={value} />
            <p>
              {t(
                "阅读、实践与复习为必修。外部资料、视频和自测均为选修。原有勾选和笔记已保留。",
                "Reading, practice and review count toward completion. External references, videos and quick checks are optional. Existing checks and notes are preserved.",
              )}
            </p>
            <Checklist week={week} />
          </section>
          <section className="reading-section">
            <div className="section-title">
              <h2>{t("我的学习笔记", "My study notes")}</h2>
              <span className="saved-state" role="status">
                {!ready
                  ? t("正在读取…", "Loading…")
                  : error
                    ? t("尚未保存", "Not saved")
                    : t("已自动保存到此浏览器", "Saved in this browser")}
              </span>
            </div>
            <label htmlFor="weekly-notes">
              {t(
                "记下你的发现、疑问，或本周实践的结果。",
                "Write down your discoveries, questions or practical task results.",
              )}
            </label>
            <textarea
              id="weekly-notes"
              rows={8}
              disabled={!ready}
              placeholder={t(
                "今天我学到…\n我想在下一餐试试…",
                "Today I learned…\nAt my next meal I want to try…",
              )}
              value={progress.weeks[week.week]?.notes ?? ""}
              onChange={(e) => note(week.week, e.target.value)}
            />
            <small className="muted">
              {t(
                "笔记仅保存在当前浏览器，不会同步到其他设备。",
                "Notes stay in this browser and do not sync across devices.",
              )}
            </small>
          </section>
          <p className="disclaimer">
            {t(
              disclaimer,
              disclaimerEn +
                " Seek appropriate professional advice for questions involving pregnancy, illness, allergies, medicines or supplements.",
            )}
          </p>
        </article>
      </div>
      <WeekNavigation id={week.week} />
    </>
  );
}
