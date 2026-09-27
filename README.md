# 好好吃 · Nourish & Learn

A bilingual family nutrition learning app in `cziwu12/nutrition-course-mvp`, built with Next.js App Router, React, TypeScript and Tailwind CSS. No authentication, backend, API keys or environment variables are required.

**Weeks 1–8 now have full authored Chinese and English lessons:** six self-contained sections per week, defined terminology, four quick checks with feedback, practical activities, summaries and optional references. Week 1 remains the approved benchmark. Eight verified YouTube selections appear inline at relevant sections. Weeks 9–24 retain their curriculum and learning records and explicitly say detailed lessons are being developed. The full 24-week content expansion is not yet complete. See [the editorial report](docs/course-expansion-report.md).

## Run

Node.js 20.9+ is required (developed with Node 24).

```sh
npm ci
npm run dev
```

Open http://localhost:3000/course/week/1. For production preview:

```sh
npm run build
npm run start
```

## Verify

```sh
npm run lint
npm run typecheck
npx playwright install chromium
npm test
```

Build first: Playwright starts a production server automatically if one is not already running. Restart any existing server after rebuilding so tests use the latest application. Tests cover all 24 routes, desktop/mobile overflow, notes and checklist persistence, reset confirmation, storage errors, cross-tab synchronization, graduation, legacy data, language persistence, lesson anchors, quiz feedback and answer retention. Screenshot and trace output is in the ignored `test-results/` folder.

## Content structure

- `src/data/course.ts`: compatibility export, preserving existing consumer imports.
- `src/data/course/index.ts`: assembles week metadata, published lessons and checklists.
- `src/data/course/curriculum.ts`: original 24-week curriculum metadata.
- `src/data/course/weeks/week01.ts`–`week08.ts`: authored bilingual lessons, terms, questions, practical activities and summaries.
- `src/data/course/lesson-types.ts`: discriminated block types, localized content, lesson sections, terms, questions and publication state.
- `src/data/course/phases.ts`, `resources.ts`, `videos.ts`, `activities.ts`: shared phases, trusted references, video selections and preserved practical activities.
- `src/components/lesson.tsx`: block renderer, lesson directory, terminology and quick checks.
- `src/components/week-detail.tsx`: reading flow and existing progress/notes integration.
- `src/lib/language.tsx`: Chinese/English preference and language selector.
- `src/lib/progress-store.ts` and `progress.tsx`: validated persistence and shared progress hook.

### Author another lesson

1. Add a `Lesson` in `weeks/weekNN.ts`. Author both languages explicitly; no runtime translation service is used.
2. Supply sections with stable IDs, localized block arrays, terminology IDs and supporting source IDs. Blocks support paragraphs, headings, lists, comparisons, examples, accessible ordered process diagrams and important/remember/warning callouts.
3. Define meaningful terminology, stable question/option IDs with feedback, a practical task and summary. Do not change IDs merely to edit wording: persisted answers refer to these IDs.
4. Register the published lesson in `lessons.ts`, replacing only that week's `developing` state. Keep its existing metadata and checklist IDs.
5. Add verified sources to `resources.ts`, keep section source IDs valid (the authoring helper merges them into the lesson references and resource backlinks are derived), and record the content review date. External reading must remain optional.

Each localized field is `{ zh: ..., en: ... }`. Either language can be edited without changing components. Week 1 retains its original helpers. Later lessons share typed helpers in `authoring.ts`; these pair explicitly authored translations and never generate lesson text. No lesson prose lives in the React renderer.

### Add a verified video

Edit `videosByWeek` in `src/data/course/videos.ts`, adding an object with `title`, `channel`, `youtubeId`, and a short `description` explaining its value. `titleEn` and `descriptionEn` provide English display text. Do not insert invented IDs or unverified recommendations. Empty weeks deliberately show an optional-video placeholder.

The player validates 11-character YouTube IDs, embeds using `youtube-nocookie.com`, has a responsive 16:9 layout, a descriptive iframe title, lazy loading and full-screen support. Previously supported YouTube URL entries still work. A normal YouTube watch link remains available under every player. `afterSection` places a selection beside the relevant lesson; `verifiedAt` records the editorial check date. The resource library derives video entries from the same data.

## Progress and compatibility

The key remains **`nutrition-course:progress:v1`**. There is no destructive migration. Existing week IDs, checklist IDs, notes, current week and recent activity are retained. The added `answers` object is optional, so pre-lesson records still load. Unknown quiz options are ignored; valid choices survive language changes, notes edits and checkbox edits.

A week now requires only reading, practical work and review. References, videos and quizzes are optional. **Existing percentages may increase** because reference reading no longer contributes to the required denominator; no stored checks are deleted. Fully completed weeks remain complete. The current week remains the last one opened. Overall progress counts required checklist items, with completed weeks shown separately. Reset removes progress, notes and quiz choices, but retains language preference.

The separate language key is **`nutrition-course:language:v1`**. The initial server/client render is Chinese, then the saved preference loads after hydration. Browser language attributes update for accessibility. Both languages use the same routes and learning state. Weeks 1–8 and lesson navigation are bilingual; the original dashboard, progress/settings prose and some legacy metadata remain Chinese in this iteration.

State stays in this browser; it is not uploaded or synced across devices. Storage events synchronize tabs. Invalid stored progress is protected from automatic overwrites, and failed writes produce a visible warning. The storage adapter remains the replacement point for a future database. Quiz answers are for retrieval practice, not grading, and never gate completion.

## Editorial scope and accuracy

Week 1 uses original explanations and everyday family-food examples. Its references include WHO healthy diet, NIH ODS dietary reference definitions, MedlinePlus nutrition definitions and NIDDK energy-expenditure background, checked on 2026-09-25. References are available within the lesson and library, with no external reading required. Existing Harvard and KKM entries remain intact; unverified references remain labelled placeholders.

This is education, not diagnosis, treatment, weight-loss targets or supplement prescribing. UL is explicitly an upper-limit reference, never a recommended target. Personal advice involving illness, pregnancy, allergies, medicines or supplements belongs with qualified health professionals.

## Interface

The original warm palette, roadmap, dashboard, responsive navigation and storage behaviour are preserved. The lesson uses a readable prose column, sticky scrollable directory on desktop, in-page links, accessible radio groups, clear feedback and an inline terminology section. On mobile the directory moves above the lesson and comparisons stack vertically. External sources appear near the bottom and are explicitly optional. No tracking scripts or runtime translation calls are included.

### Verify videos

`node scripts/verify-videos.mjs VIDEO_ID ...` checks live YouTube oEmbed title/channel and watch-page duration/embed status, recording results in `docs/video-verification.json`. Selection still requires editorial relevance review. `node scripts/check-video-playback.mjs` checks the actual players against the running local app and records its observed results separately. Network access is required. App regression tests isolate third-party playback so network failures do not mask application regressions.
