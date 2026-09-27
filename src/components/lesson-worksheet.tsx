"use client";
import { worksheets } from "@/data/course/worksheets";
import { useCourseProgress } from "@/lib/progress";
import { useLanguage } from "@/lib/language";
export function LessonWorksheet({ week }: { week: number }) {
  const worksheet = worksheets[week];
  const { progress, ready, error, writeWorksheet } = useCourseProgress();
  const { language, t } = useLanguage();
  if (!worksheet) return null;
  const values = progress.weeks[week]?.worksheet ?? {};
  const filled = worksheet.fields.filter((f) => values[f.id]?.trim()).length;
  const download = () => {
    const text = [
      worksheet.title[language],
      worksheet.prompt[language],
      ...worksheet.fields.map(
        (f) => `${f.label[language]}\n${values[f.id] ?? ""}`,
      ),
    ].join("\n\n");
    const url = URL.createObjectURL(
      new Blob([text], { type: "text/plain;charset=utf-8" }),
    );
    const a = document.createElement("a");
    a.href = url;
    a.download = `nutrition-week-${week}-worksheet.txt`;
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };
  return (
    <div
      className="lesson-worksheet"
      aria-labelledby={`worksheet-title-${week}`}
    >
      <h3 id={`worksheet-title-${week}`}>{worksheet.title[language]}</h3>
      <p>{worksheet.prompt[language]}</p>
      <p className="muted">
        {t(
          "自动保存在当前浏览器；不会上传或跨设备同步。切换语言保留你的原文。",
          "Saved automatically in this browser; not uploaded or synced across devices. Language changes preserve your writing.",
        )}
      </p>
      <fieldset disabled={!ready}>
        <legend className="sr-only">{worksheet.title[language]}</legend>
        {worksheet.fields.map((f) => (
          <div className="worksheet-field" key={f.id}>
            <label htmlFor={`worksheet-${week}-${f.id}`}>
              {f.label[language]}
            </label>
            <textarea
              id={`worksheet-${week}-${f.id}`}
              rows={3}
              value={values[f.id] ?? ""}
              onChange={(e) => writeWorksheet(week, f.id, e.target.value)}
            />
          </div>
        ))}
      </fieldset>
      <div className="worksheet-footer">
        <span role="status">
          {error
            ? t(
                "未能确认保存，请下载副本。",
                "Saving could not be confirmed. Download a copy.",
              )
            : ready
              ? t(
                  `${filled} / ${worksheet.fields.length} 栏已填写 · 自动保存`,
                  `${filled} / ${worksheet.fields.length} fields filled · Autosaved`,
                )
              : t("正在读取…", "Loading…")}
        </span>
        <button
          className="button secondary"
          type="button"
          disabled={!ready}
          onClick={download}
        >
          {t("下载文字副本", "Download text copy")}
        </button>
      </div>
      <small>
        {t(
          "填写栏数只是写作提示，不自动完成本周；请完成后勾选实践任务。",
          "The field count is a writing aid, not automatic completion. Mark the practical task when finished.",
        )}
      </small>
    </div>
  );
}
