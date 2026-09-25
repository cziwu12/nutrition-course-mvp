"use client";
import { createContext, useContext, useEffect, useState } from "react";
import type { Language } from "@/data/course/lesson-types";
export const LANGUAGE_KEY = "nutrition-course:language:v1";
const Context = createContext<{
  language: Language;
  setLanguage: (value: Language) => void;
  t: (zh: string, en: string) => string;
  error: string;
} | null>(null);
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setValue] = useState<Language>("zh");
  const [error, setError] = useState("");
  useEffect(() => {
    const load = () => {
      try {
        const saved = localStorage.getItem(LANGUAGE_KEY);
        setValue(saved === "en" ? "en" : "zh");
      } catch {
        setError("语言偏好暂时无法保存 / Language preference cannot be saved.");
      }
    };
    load();
    const sync = (event: StorageEvent) => {
      if (event.key === LANGUAGE_KEY || event.key === null) load();
    };
    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, []);
  useEffect(() => {
    document.documentElement.lang = language === "zh" ? "zh-Hans" : "en";
  }, [language]);
  const setLanguage = (value: Language) => {
    setValue(value);
    try {
      localStorage.setItem(LANGUAGE_KEY, value);
      setError("");
    } catch {
      setError("语言偏好暂时无法保存 / Language preference cannot be saved.");
    }
  };
  return (
    <Context.Provider
      value={{
        language,
        setLanguage,
        t: (zh, en) => (language === "zh" ? zh : en),
        error,
      }}
    >
      {children}
    </Context.Provider>
  );
}
export function useLanguage() {
  const context = useContext(Context);
  if (!context) throw new Error("LanguageProvider required");
  return context;
}
export function LanguageSelector() {
  const { language, setLanguage, t, error } = useLanguage();
  return (
    <div className="language-control">
      <div
        className="language-switch"
        role="group"
        aria-label={t("课程语言", "Course language")}
      >
        <button
          type="button"
          lang="zh-Hans"
          aria-pressed={language === "zh"}
          onClick={() => setLanguage("zh")}
        >
          中文
        </button>
        <button
          type="button"
          lang="en"
          aria-pressed={language === "en"}
          onClick={() => setLanguage("en")}
        >
          English
        </button>
      </div>
      {error && (
        <span role="status" className="language-error">
          {error}
        </span>
      )}
    </div>
  );
}
