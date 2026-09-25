"use client";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  browserStorage,
  emptyProgress,
  Progress,
  STORAGE_KEY,
  weekPercentage,
  courseStats,
} from "./progress-store";
const Context = createContext<ReturnType<typeof useProgressState> | null>(null);
function useProgressState() {
  const [progress, setProgress] = useState<Progress>(emptyProgress);
  const [ready, setReady] = useState(false);
  const [error, setError] = useState("");
  const current = useRef(progress);
  const blocked = useRef(false);
  useEffect(() => {
    const load = () => {
      try {
        const saved = browserStorage.load();
        current.current = saved;
        setProgress(saved);
        blocked.current = false;
        setError("");
      } catch {
        blocked.current = true;
        setError(
          "无法读取浏览器存储。为保护已有笔记，暂不覆盖；请检查浏览器存储权限或在设置中重置。",
        );
      }
      setReady(true);
    };
    load();
    const sync = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY || e.key === null) load();
    };
    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, []);
  const update = useCallback(
    (transform: (p: Progress) => Progress) => {
      if (!ready || blocked.current) return;
      const next = transform(current.current);
      current.current = next;
      setProgress(next);
      try {
        browserStorage.save(next);
        setError("");
      } catch {
        setError(
          "更改仅保留在当前页面，未能保存到浏览器。请检查存储空间与权限，并保留笔记副本。",
        );
      }
    },
    [ready],
  );
  // A stable callback records navigation only, not remote storage updates.
  // Otherwise two tabs on different weeks repeatedly overwrite currentWeek.
  const visit = useCallback(
    (week: number) => {
      if (current.current.currentWeek !== week)
        update((p) => ({ ...p, currentWeek: week }));
    },
    [update],
  );
  const check = (week: number, id: string, value: boolean) =>
    update((p) => ({
      ...p,
      weeks: {
        ...p.weeks,
        [week]: {
          notes: p.weeks[week]?.notes ?? "",
          checks: { ...p.weeks[week]?.checks, [id]: value },
        },
      },
      activity: [
        {
          week,
          text: value ? "完成一项学习任务" : "取消一项学习任务",
          date: new Date().toISOString(),
        },
        ...p.activity,
      ].slice(0, 20),
    }));
  const note = (week: number, notes: string) =>
    update((p) => ({
      ...p,
      weeks: {
        ...p.weeks,
        [week]: { checks: p.weeks[week]?.checks ?? {}, notes },
      },
    }));
  const reset = () => {
    try {
      browserStorage.reset();
      const fresh = emptyProgress();
      current.current = fresh;
      setProgress(fresh);
      blocked.current = false;
      setError("");
      return true;
    } catch {
      setError("重置失败，请检查浏览器的存储权限。");
      return false;
    }
  };
  return {
    progress,
    ready,
    error,
    visit,
    check,
    note,
    reset,
    percent: (id: number) => weekPercentage(progress, id),
    stats: courseStats(progress),
  };
}
export function CourseProvider({ children }: { children: React.ReactNode }) {
  const value = useProgressState();
  return <Context.Provider value={value}>{children}</Context.Provider>;
}
export function useCourseProgress() {
  const value = useContext(Context);
  if (!value) throw new Error("CourseProvider is required");
  return value;
}
