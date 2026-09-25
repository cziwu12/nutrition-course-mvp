"use client";
import { useLanguage } from "@/lib/language";
import { useCourseProgress } from "@/lib/progress";
import type { LessonBlock, Lesson, Question } from "@/data/course";
export function LessonBlockView({ block }: { block: LessonBlock }) {
  switch (block.type) {
    case "paragraph":
      return <p>{block.text}</p>;
    case "heading":
      return <h3>{block.text}</h3>;
    case "bulletList":
      return (
        <ul>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "comparison":
      return (
        <div className="lesson-comparison">
          {block.columns.map((column) => (
            <div key={column.title}>
              <h3>{column.title}</h3>
              <ul>
                {column.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
    case "callout":
      return (
        <aside className={`lesson-callout ${block.variant}`}>
          <h3>{block.title}</h3>
          <p>{block.text}</p>
        </aside>
      );
    case "example":
      return (
        <div className="lesson-example">
          <h3>{block.title}</h3>
          <p>{block.body}</p>
        </div>
      );
  }
}
export function LessonSections({ lesson }: { lesson: Lesson }) {
  const { language, t } = useLanguage();
  return (
    <>
      {lesson.sections.map((section) => (
        <section
          className="reading-section"
          id={section.id}
          key={section.id}
          aria-labelledby={`${section.id}-heading`}
        >
          <h2 id={`${section.id}-heading`}>{section.title[language]}</h2>
          {section.content[language].map((block, i) => (
            <LessonBlockView block={block} key={i} />
          ))}
          <div className="section-term-links">
            <span>{t("相关术语", "Related terms")}</span>
            {section.termIds.map((id) => {
              const term = lesson.keyTerms.find((term) => term.id === id);
              return term ? (
                <a key={id} href={`#term-${id}`}>
                  {term.term[language]}
                </a>
              ) : null;
            })}
          </div>
        </section>
      ))}
    </>
  );
}
export function KeyTerms({ lesson }: { lesson: Lesson }) {
  const { language, t } = useLanguage();
  return (
    <section id="key-terms" className="reading-section">
      <span className="eyebrow">WORDS THAT MAKE SENSE</span>
      <h2>{t("关键术语，不止是翻译", "Key terms, explained")}</h2>
      <p>
        {t(
          "点击正文里的术语链接可以跳到这里。每个词都有定义，随时回来查阅。",
          "Use the term links in each section to jump here. Every term includes a definition you can return to while studying.",
        )}
      </p>
      <dl className="defined-terms">
        {lesson.keyTerms.map((term) => (
          <div id={`term-${term.id}`} key={term.id}>
            <dt>
              {term.term[language]}{" "}
              <span lang={language === "zh" ? "en" : "zh-Hans"}>
                {term.term[language === "zh" ? "en" : "zh"]}
              </span>
            </dt>
            <dd>
              {term.definition[language]}
              {term.example && (
                <p className="term-example">
                  {t("例如：", "Example: ")}
                  {term.example[language]}
                </p>
              )}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
function QuickCheck({ question, week }: { question: Question; week: number }) {
  const { language, t } = useLanguage();
  const { progress, answer, ready } = useCourseProgress();
  const selected = progress.weeks[week]?.answers?.[question.id];
  const correct = selected === question.answerId;
  return (
    <fieldset className="quick-check">
      <legend>{question.prompt[language]}</legend>
      <div className="answer-options">
        {question.options.map((option) => (
          <label
            key={option.id}
            className={selected === option.id ? "selected" : ""}
          >
            <input
              type="radio"
              name={`question-${week}-${question.id}`}
              value={option.id}
              checked={selected === option.id}
              disabled={!ready}
              onChange={() => answer(week, question.id, option.id)}
            />
            <span>{option.text[language]}</span>
          </label>
        ))}
      </div>
      {selected !== undefined && (
        <div
          className={`answer-feedback ${correct ? "correct" : "retry"}`}
          role="status"
        >
          <strong>
            {correct
              ? t("答对了", "That’s right")
              : t("再想一想", "Let’s think it through")}
          </strong>
          <p>{question.feedback[language]}</p>
          {!correct && (
            <small>
              {t(
                "可以重新选择，不计分。",
                "Choose again whenever you like. There is no score.",
              )}
            </small>
          )}
        </div>
      )}
    </fieldset>
  );
}
export function QuickChecks({
  lesson,
  week,
}: {
  lesson: Lesson;
  week: number;
}) {
  const { t } = useLanguage();
  return (
    <section id="quick-checks" className="reading-section">
      <h2>{t("停一下，想一想", "Pause and recall")}</h2>
      <p>
        {t(
          "四个小问题，帮助记住刚学到的内容。没有分数，不影响课程完成；答案自动保存在此浏览器。",
          "Four short questions to practise recall. No score and no completion requirement. Your choices are saved in this browser.",
        )}
      </p>
      {lesson.questions.map((q) => (
        <QuickCheck key={q.id} question={q} week={week} />
      ))}
    </section>
  );
}
export function LessonContents({ lesson }: { lesson: Lesson }) {
  const { language, t } = useLanguage();
  return (
    <nav className="lesson-contents" aria-label={t("本课目录", "On this page")}>
      <span className="eyebrow">YOUR LEARNING GUIDE</span>
      <h2>{t("本课目录", "On this page")}</h2>
      {lesson.sections.map((section) => (
        <a key={section.id} href={`#${section.id}`}>
          {section.title[language]}
        </a>
      ))}
      <hr />
      <a href="#key-terms">{t("关键术语", "Key terms")}</a>
      <a href="#lesson-videos">{t("视频 · 选修", "Videos · optional")}</a>
      <a href="#quick-checks">{t("快速自测", "Quick checks")}</a>
      <a href="#lesson-practice">{t("实践任务", "Practical task")}</a>
      <a href="#lesson-summary">{t("本周总结", "Week summary")}</a>
      <a href="#lesson-references">
        {t("资料来源与延伸阅读", "Sources & further reading")}
      </a>
      <a href="#lesson-completion">{t("清单与笔记", "Checklist & notes")}</a>
    </nav>
  );
}
