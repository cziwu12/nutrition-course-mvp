"use client";
import Link from "next/link";
import { phases, weeks, Week, Resource, Video } from "@/data/course";
import { useCourseProgress } from "@/lib/progress";
import { useLanguage } from "@/lib/language";
import { practicalTasksEn } from "@/data/course/activities";
import { Icon } from "./shell";
export function ProgressBar({
  value,
  label = "学习进度",
}: {
  value: number;
  label?: string;
}) {
  return (
    <div
      className="progress-track"
      role="progressbar"
      aria-label={label}
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <span style={{ width: `${value}%` }} />
    </div>
  );
}
export function WeekCard({
  week,
  compact = false,
}: {
  week: Week;
  compact?: boolean;
}) {
  const { language, t } = useLanguage();
  const { percent, progress } = useCourseProgress();
  const value = percent(week.week);
  const current = progress.currentWeek === week.week;
  return (
    <Link
      href={`/course/week/${week.week}`}
      className={`week-card ${compact ? "compact" : ""} ${current ? "current" : ""} ${value === 100 ? "completed" : ""}`}
    >
      <span className="week-number">
        {value === 100 ? (
          <Icon name="check" />
        ) : (
          String(week.week).padStart(2, "0")
        )}
      </span>
      <div>
        <strong>{t(week.titleZh, week.titleEn)}</strong>
        {!compact && (
          <>
            <small>{t(week.titleEn, week.titleZh)}</small>
            <p lang="zh-Hans">
              {language === "zh"
                ? week.description
                : "Full lesson in development · explore the curriculum"}
            </p>
          </>
        )}
      </div>
      <span className="week-state">
        {value === 100 ? (
          t("已完成", "Complete")
        ) : current ? (
          t("学习中", "Current")
        ) : value > 0 ? (
          `${value}%`
        ) : (
          <Icon name="arrow" />
        )}
      </span>
    </Link>
  );
}
export function CoursePhaseCard({
  phase,
  compact = false,
}: {
  phase: (typeof phases)[number];
  compact?: boolean;
}) {
  const { t } = useLanguage();
  const { percent } = useCourseProgress();
  const items = weeks.filter((w) => w.month === phase.month);
  const completed = items.filter((w) => percent(w.week) === 100).length;
  return (
    <section className={`phase-card ${phase.color}`}>
      <div className="phase-heading">
        <span className="phase-icon">{phase.icon}</span>
        <div>
          <small>
            MONTH {String(phase.month).padStart(2, "0")}{" "}
            <span>
              · 第 {items[0].week}–{items[3].week} 周
            </span>
          </small>
          <h3>
            {t(
              phase.title,
              [
                "Nutrition foundations",
                "Micronutrients & digestion",
                "Nutrition & health",
                "Nutrition through life",
                "Everyday food skills",
                "Evidence & final project",
              ][phase.month - 1],
            )}
          </h3>
        </div>
        <span className="phase-count">{completed}/4</span>
      </div>
      {!compact && <p>{phase.description}</p>}
      <div className="phase-weeks">
        {items.map((w) => (
          <WeekCard key={w.week} week={w} compact={compact} />
        ))}
      </div>
    </section>
  );
}
export function ResourceCard({
  resource,
  backlinks = false,
}: {
  resource: Resource;
  backlinks?: boolean;
}) {
  const { t } = useLanguage();
  return (
    <article className="resource-card">
      <div className="resource-top">
        <span className="resource-icon">
          <Icon name={resource.type === "video" ? "play" : "book"} />
        </span>
        <span className="tag">{resource.type}</span>
      </div>
      <small>{resource.source}</small>
      <h3>{t(resource.title, resource.titleEn ?? resource.title)}</h3>
      <p>
        {t(
          resource.description,
          resource.descriptionEn ?? resource.description,
        )}
      </p>
      <div className="tags">
        {resource.tags.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
      {resource.url ? (
        <a
          className="text-link"
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("阅读资料", "Read source")} <Icon name="external" />
          <span className="sr-only">
            {t("（新窗口）", " (opens in a new tab)")}
          </span>
        </a>
      ) : (
        <span className="muted">Resource to be added · 待补充</span>
      )}
      {backlinks && !!resource.weeks.length && (
        <div className="resource-weeks">
          相关课程{" "}
          {resource.weeks.map((id) => (
            <Link key={id} href={`/course/week/${id}`}>
              第{id}周
            </Link>
          ))}
        </div>
      )}
    </article>
  );
}
export function youtubeEmbed(url?: string) {
  if (!url) return null;
  try {
    const u = new URL(url);
    if (u.protocol !== "https:") return null;
    const hosts = [
      "youtube.com",
      "www.youtube.com",
      "m.youtube.com",
      "youtube-nocookie.com",
      "www.youtube-nocookie.com",
    ];
    let id: string | null = null;
    if (u.hostname === "youtu.be") id = u.pathname.slice(1);
    else if (hosts.includes(u.hostname))
      id =
        u.pathname === "/watch"
          ? u.searchParams.get("v")
          : (u.pathname.match(/^\/(?:embed|shorts)\/([\w-]+)$/)?.[1] ?? null);
    return id && /^[\w-]{11}$/.test(id)
      ? `https://www.youtube-nocookie.com/embed/${id}`
      : null;
  } catch {
    return null;
  }
}
export function VideoCard({ video }: { video: Video }) {
  const { t } = useLanguage();
  const embed =
    video.youtubeId && /^[\w-]{11}$/.test(video.youtubeId)
      ? "https://www.youtube-nocookie.com/embed/" + video.youtubeId
      : youtubeEmbed(video.url);
  return embed ? (
    <article className="video-card">
      <iframe
        src={embed}
        title={t(
          video.title ?? "课程视频",
          video.titleEn ?? video.title ?? "Lesson video",
        )}
        loading="lazy"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      />
      <h3>
        {t(
          video.title ?? "课程视频",
          video.titleEn ?? video.title ?? "Lesson video",
        )}
      </h3>
      <p>
        {video.channel} ·{" "}
        {t(
          video.description ?? "",
          video.descriptionEn ?? video.description ?? "",
        )}
      </p>
    </article>
  ) : (
    <div className="video-placeholder">
      <Icon name="play" />
      <div>
        <strong>{t("本周视频待补充", "Video selection in progress")}</strong>
        <p>
          {t(
            "精选视频核验后将在这里显示。视频为选修，不影响本周完成进度。",
            "A verified video will appear here when selected. The lesson stands on its own; watching is optional.",
          )}
        </p>
      </div>
      <span className="tag">{t("即将补充", "Optional")}</span>
    </div>
  );
}
export function Checklist({ week }: { week: Week }) {
  const { t } = useLanguage();
  const labels: Record<string, string> = {
    topics: "Read this week’s lesson",
    resources: "Explore the references",
    videos: "Watch a video",
    practice: "Complete the practical task",
    review: "Review this week",
  };
  const { progress, check, ready } = useCourseProgress();
  return (
    <div className="checklist">
      {week.checklist.map((c) => (
        <label key={c.id}>
          <input
            type="checkbox"
            checked={!!progress.weeks[week.week]?.checks[c.id]}
            disabled={!ready}
            onChange={(e) => check(week.week, c.id, e.target.checked)}
          />
          <span>
            {t(c.label, labels[c.id] ?? c.label)}
            {!c.required && (
              <small>
                {t(
                  c.id === "resources"
                    ? "选修 · 延伸阅读"
                    : "选修 · 内容待补充",
                  c.id === "resources"
                    ? "Optional · further reading"
                    : "Optional · content being selected",
                )}
              </small>
            )}
          </span>
        </label>
      ))}
    </div>
  );
}
export function VocabularyCard({ week }: { week: Week }) {
  return (
    <div className="vocabulary">
      {week.vocabulary.map((v) => (
        <div key={v.en}>
          <strong>{v.en}</strong>
          <span>{v.zh}</span>
        </div>
      ))}
    </div>
  );
}
export function PracticalTaskCard({ week }: { week: Week }) {
  const { language, t } = useLanguage();
  const task =
    week.lesson.status === "published"
      ? week.lesson.practicalTask[language]
      : t(
          week.practicalTask,
          practicalTasksEn[week.week] ?? week.practicalTask,
        );
  const { progress, check, ready } = useCourseProgress();
  return (
    <section className="practical panel">
      <span className="eyebrow">BRING IT TO YOUR TABLE</span>
      <h2>{t("实践任务", "Put it into practice")}</h2>
      <p>{task}</p>
      <label className="practice-check">
        <input
          type="checkbox"
          checked={!!progress.weeks[week.week]?.checks.practice}
          disabled={!ready}
          onChange={(e) => check(week.week, "practice", e.target.checked)}
        />{" "}
        {t(
          "我已完成本周实践任务",
          "I have completed this week’s practical task",
        )}
      </label>
    </section>
  );
}
export function WeekNavigation({ id }: { id: number }) {
  const { t } = useLanguage();
  return (
    <nav className="week-nav" aria-label={t("周导航", "Week navigation")}>
      {id > 1 ? (
        <Link href={`/course/week/${id - 1}`}>
          ← {t("上一周", "Previous week")}{" "}
          <small>{t(weeks[id - 2].titleZh, weeks[id - 2].titleEn)}</small>
        </Link>
      ) : (
        <span />
      )}
      <Link href="/course">{t("返回课程路线", "Back to course")}</Link>
      {id < 24 ? (
        <Link href={`/course/week/${id + 1}`}>
          {t("下一周", "Next week")} →{" "}
          <small>{t(weeks[id].titleZh, weeks[id].titleEn)}</small>
        </Link>
      ) : (
        <Link href="/progress">{t("查看学习成果", "View progress")} →</Link>
      )}
    </nav>
  );
}
