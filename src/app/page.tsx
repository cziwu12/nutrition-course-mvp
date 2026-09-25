"use client";
import Link from "next/link";
import { phases, weeks, disclaimer, disclaimerEn } from "@/data/course";
import { useCourseProgress } from "@/lib/progress";
import { CoursePhaseCard, ProgressBar } from "@/components/course";
import { Icon } from "@/components/shell";
function FoodIllustration() {
  return (
    <div className="food-art" aria-hidden="true">
      <svg viewBox="0 0 360 300">
        <ellipse cx="183" cy="268" rx="130" ry="12" fill="#dce2d4" />
        <path
          d="M64 146c-31-46-8-72 1-77 5 32 32 34 30 67M290 174c48-32 45-65 40-77-27 17-43 41-40 77"
          fill="#8d9f78"
        />
        <path
          d="m76 92 17 74m228-51-31 78"
          fill="none"
          stroke="#f3f2e6"
          strokeWidth="2"
        />
        <circle cx="185" cy="157" r="113" fill="#e7e8d8" />
        <circle cx="181" cy="150" r="110" fill="#fffcf0" />
        <circle cx="181" cy="150" r="91" fill="#f0eee0" stroke="#dedfcb" />
        <path d="M179 70a80 80 0 0 0-2 160Z" fill="#d9e2c2" />
        <path d="M187 71a81 81 0 0 1 70 74h-70Z" fill="#e1c791" />
        <path d="M187 153h70a80 80 0 0 1-70 77Z" fill="#e8b996" />
        {[
          [133, 106],
          [119, 130],
          [150, 142],
          [121, 166],
          [151, 189],
          [142, 121],
        ].map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="17" fill={i % 2 ? "#62865b" : "#819a61"} />
            <path
              d={`m${x - 7} ${y + 4} 13-7`}
              stroke="#a7bb89"
              strokeWidth="2"
            />
          </g>
        ))}
        {[
          [152, 163],
          [121, 194],
          [157, 97],
        ].map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="12" fill="#d98664" />
            <circle cx={x} cy={y} r="8" fill="none" stroke="#f2b293" />
          </g>
        ))}
        {[
          [206, 99],
          [227, 119],
          [203, 128],
        ].map(([x, y], i) => (
          <rect
            key={i}
            x={x - 7}
            y={y - 4}
            width="20"
            height="8"
            rx="4"
            transform={`rotate(-25 ${x} ${y})`}
            fill="#f9efd1"
          />
        ))}
        <path d="m202 170 36 8-11 28-33-10Z" fill="#c78661" />
        <path d="m203 177 28 8m-31 1 27 8" stroke="#edc4a2" strokeWidth="3" />
        <path d="M58 209c-11 7-14 17-10 24 14 2 26-6 27-20Z" fill="#667e53" />
        <path d="m53 226 27-16" stroke="#b8c59d" />
        <circle cx="280" cy="70" r="9" fill="#ddae72" />
        <circle cx="305" cy="223" r="6" fill="#c7cfac" />
      </svg>
      <span className="art-caption">
        A LITTLE LEARNING, A HEALTHIER EVERYDAY.
      </span>
    </div>
  );
}
export default function Dashboard() {
  const { progress, stats, percent, ready } = useCourseProgress();
  const week = weeks[progress.currentWeek - 1];
  return (
    <>
      <div className="page-top">
        <div>
          <span className="eyebrow">YOUR EVERYDAY NOURISHMENT</span>
          <h1>
            你好，今天也一起好好吃 <span className="greeting-leaf">✳</span>
          </h1>
          <p>从认识一餐开始，慢慢学会照顾自己与家人。</p>
        </div>
        <span className="quiet-badge">
          <Icon name="book" /> 我的24周学习计划
        </span>
      </div>
      <section className="hero">
        <div className="hero-copy">
          <span className="pill">循序渐进 · 为真实生活而学</span>
          <h2>
            6个月家庭营养与健康
            <br />
            自学课程
          </h2>
          <p>
            每天一点知识，每周一次实践。
            <br />
            让健康的选择，自然地融入家的餐桌。
          </p>
          <div className="hero-meta">
            <span>
              <Icon name="clock" /> 每天约1小时
            </span>
            <span>每周5天</span>
            <span>24周</span>
          </div>
        </div>
        <FoodIllustration />
      </section>
      <div className="dashboard-grid">
        <section className="current-card">
          <div className="section-kicker">
            <span>
              <span className="live-dot" />{" "}
              {stats.completed === 24 ? "随时回来复习" : "接着上次的进度"}
            </span>
            <span>MONTH {String(week.month).padStart(2, "0")}</span>
          </div>
          <div className="current-body">
            <div className="current-number">
              <small>WEEK</small>
              {String(week.week).padStart(2, "0")}
            </div>
            <div>
              <h2>
                {week.titleZh} <small>{week.titleEn}</small>
              </h2>
              <p>{week.description}</p>
            </div>
          </div>
          <div className="current-bottom">
            <div>
              <div className="progress-label">
                <span>本周进度</span>
                <strong>{ready ? percent(week.week) : 0}%</strong>
              </div>
              <ProgressBar value={percent(week.week)} />
            </div>
            <Link className="button primary" href={`/course/week/${week.week}`}>
              继续学习 <Icon name="arrow" />
            </Link>
          </div>
        </section>
        <section className="overall-card">
          <div>
            <h3>每一步，都算数</h3>
            <p>我的课程总进度</p>
          </div>
          <div className="overall-body">
            <div
              className="progress-ring"
              style={{
                background: `conic-gradient(var(--green) ${stats.percentage}%, #e8ece4 0)`,
              }}
            >
              <span>
                {stats.percentage}
                <small>%</small>
              </span>
            </div>
            <div>
              <strong>
                {stats.completed} <span>/ 24 周</span>
              </strong>
              <p>已完成学习</p>
              <Link href="/progress" className="text-link">
                查看进度 <Icon name="arrow" />
              </Link>
            </div>
          </div>
        </section>
      </div>
      <div className="section-title">
        <div>
          <h2>你的6个月学习路线</h2>
          <p>从基础到实践，每周向前一小步。所有课程都可随时打开。</p>
        </div>
        <Link className="text-link" href="/course">
          查看完整课程 <Icon name="arrow" />
        </Link>
      </div>
      <div className="roadmap-grid">
        {phases.map((p) => (
          <CoursePhaseCard key={p.month} phase={p} compact />
        ))}
      </div>
      <section className="daily panel">
        <div>
          <span className="eyebrow">A SMALL DAILY RITUAL</span>
          <h2>每天一小时，给自己一点成长的时间</h2>
          <p>每周学习5天，另外2天留给休息或复习。</p>
        </div>
        <div className="daily-steps">
          <div>
            <strong>
              30<small>分钟</small>
            </strong>
            <span>学习营养知识</span>
          </div>
          <span>＋</span>
          <div>
            <strong>
              20<small>分钟</small>
            </strong>
            <span>生活中的实际应用</span>
          </div>
          <span>＋</span>
          <div>
            <strong>
              10<small>分钟</small>
            </strong>
            <span>积累营养英语</span>
          </div>
        </div>
      </section>
      <div className="goal-note">
        <Icon name="leaf" />
        <p>
          <strong>6个月后，希望你能：</strong>
          理解基础营养知识、分析日常饮食，并能够用简单的方式解释常见营养概念。
        </p>
      </div>
      <div className="disclaimer">
        <p>{disclaimer}</p>
        <p>{disclaimerEn}</p>
      </div>
    </>
  );
}
