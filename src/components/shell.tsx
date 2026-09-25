"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { searchWeeks, resources } from "@/data/course";
import { useCourseProgress } from "@/lib/progress";
export function Icon({
  name,
  className = "",
}: {
  name: string;
  className?: string;
}) {
  const paths: Record<string, React.ReactNode> = {
    home: (
      <>
        <path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1Z" />
      </>
    ),
    book: (
      <>
        <path d="M12 5v16M12 5C8 2 3 3 3 3v16s5-1 9 2c4-3 9-2 9-2V3s-5-1-9 2Z" />
      </>
    ),
    leaf: (
      <>
        <path d="M20 3C8 2 2 7 5 15s16 5 15-12ZM4 21 16 8" />
      </>
    ),
    chart: (
      <>
        <path d="M4 3v18h17M8 16v-4m5 4V8m5 8V4" />
      </>
    ),
    settings: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v3m0 14v3M2 12h3m14 0h3M5 5l2 2m10 10 2 2M5 19l2-2M17 7l2-2" />
      </>
    ),
    search: (
      <>
        <circle cx="10.5" cy="10.5" r="6.5" />
        <path d="m16 16 5 5" />
      </>
    ),
    arrow: <path d="M4 12h16m-6-6 6 6-6 6" />,
    check: <path d="m5 12 4 4L19 6" />,
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    play: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="3" />
        <path d="m10 9 5 3-5 3Z" />
      </>
    ),
    external: (
      <>
        <path d="M14 3h7v7m0-7L10 14M10 4H4v16h16v-6" />
      </>
    ),
  };
  return (
    <svg
      className={className}
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name] ?? paths.leaf}
    </svg>
  );
}
const nav = [
  ["/", "home", "首页"],
  ["/course", "book", "课程路线"],
  ["/resources", "leaf", "学习资源"],
  ["/progress", "chart", "学习进度"],
  ["/settings", "settings", "设置"],
];
export function Shell({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const [query, setQuery] = useState("");
  const { error, stats } = useCourseProgress();
  const matches = query.trim() ? searchWeeks(query) : [];
  const matchedResources = query.trim()
    ? resources.filter((r) =>
        [r.title, r.description, ...r.tags]
          .join(" ")
          .toLowerCase()
          .includes(query.trim().toLowerCase()),
      )
    : [];
  return (
    <div className="app-shell">
      <a className="skip" href="#main">
        跳到主要内容
      </a>
      <aside className="sidebar">
        <Link href="/" className="brand">
          <span className="brand-mark">
            <Icon name="leaf" />
          </span>
          <span>
            好好吃<small>NOURISH & LEARN</small>
          </span>
        </Link>
        <div className="side-label">我的学习空间</div>
        <nav aria-label="主导航">
          {nav.map(([href, icon, label]) => (
            <Link
              key={href}
              href={href}
              aria-current={
                (href === "/" ? path === href : path.startsWith(href))
                  ? "page"
                  : undefined
              }
            >
              <Icon name={icon} />
              <span>{label}</span>
            </Link>
          ))}
        </nav>
        <div className="sidebar-bottom">
          <div className="side-note">
            <Icon name="leaf" />
            <strong>好习惯，从一餐开始</strong>
            <p>
              不用急，按照自己的节奏，
              <br />
              一点一点，学会好好吃。
            </p>
          </div>
          <div className="profile">
            <span className="avatar">我</span>
            <div>
              我的自学旅程<small>个人学习空间 · 无需登录</small>
            </div>
          </div>
        </div>
      </aside>
      <div className="workspace">
        <header className="topbar">
          <span className="breadcrumb">
            家庭营养学习室 <span>/</span>{" "}
            {nav.find(([href]) =>
              href === "/" ? path === "/" : path.startsWith(href),
            )?.[2] ?? "课程"}
          </span>
          <div className="search-wrap">
            <Icon name="search" />
            <input
              aria-label="搜索课程与资源"
              placeholder="搜索课程、营养知识…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Escape") setQuery("");
              }}
            />
            {query && (
              <button aria-label="清除搜索" onClick={() => setQuery("")}>
                ×
              </button>
            )}
            {query.trim() && (
              <div className="search-results">
                <p>搜索结果 · {matches.length + matchedResources.length}</p>
                {matches.map((w) => (
                  <Link
                    onClick={() => setQuery("")}
                    key={w.week}
                    href={`/course/week/${w.week}`}
                  >
                    <small>第 {w.week} 周</small> {w.titleZh}
                    <span>{w.titleEn}</span>
                  </Link>
                ))}
                {matchedResources.map((r) => (
                  <Link
                    onClick={() => setQuery("")}
                    key={r.id}
                    href={`/resources?topic=${encodeURIComponent(query)}`}
                  >
                    <small>资源</small> {r.title}
                  </Link>
                ))}
                {!matches.length && !matchedResources.length && (
                  <p>没有找到结果，试试 protein、维生素D 或血糖。</p>
                )}
              </div>
            )}
          </div>
          <span className="top-avatar">我</span>
        </header>
        <main id="main" tabIndex={-1}>
          {error && (
            <div role="alert" className="notice">
              {error}
            </div>
          )}
          {children}
          <footer>
            <Icon name="leaf" />
            <span>慢慢学，好好吃。让营养知识回到生活。</span>
            <span>24周 · {stats.completed}周已完成</span>
          </footer>
        </main>
      </div>
    </div>
  );
}
