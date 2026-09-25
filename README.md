# 好好吃 · 家庭营养学习室

A responsive, Chinese-first, 24-week family nutrition learning app built directly in `cziwu12/nutrition-course-mvp` with Next.js App Router, TypeScript, React and Tailwind CSS. No authentication, backend, database, API keys or environment variables are required.

## Run locally

Node.js 20.9+ is required (developed with Node 24).

```sh
npm ci
npm run dev
```

Open http://localhost:3000. For a production preview:

```sh
npm run build
npm run start
```

## Checks

```sh
npm run lint
npm run typecheck
npx playwright install chromium
npm test
```

`npm test` starts a production server automatically, so run `npm run build` first. Browser tests run at desktop and mobile sizes and cover all 24 week routes, navigation, notes and checklist persistence, current-week resume, resource filters, corrupt storage recovery, cross-tab synchronization, graduation and reset confirmation. Screenshots and failure traces are written to the ignored `test-results/` directory.

## Structure

- `src/data/course.ts`: the single curriculum source: six phases, 24 weeks, objectives, bilingual topics, vocabulary, practical activities, checklists and resources.
- `src/lib/progress-store.ts`: versioned storage adapter, validation and pure progress calculations.
- `src/lib/progress.tsx`: shared `CourseProvider` / `useCourseProgress()` API. Loads browser state after hydration, saves edits immediately and subscribes to storage events from other tabs.
- `src/components/`: reusable phase/week cards, progress bars, resource cards, YouTube embeds, vocabulary, checklist, practical task and week navigation.
- `src/app/`: dashboard, roadmap, weekly lessons, resource library, progress and settings routes.
- `tests/course.spec.ts`: curriculum and browser regression tests.

## Progress semantics

The current week is the last week opened. Opening a future week is allowed and makes it the resume destination. A week is complete when all its **required** checklist items are checked. Overall progress measures completed required items across all weeks; the completed-week count is displayed separately. Resource reading is optional where no verified URL exists. Videos are currently optional because none were supplied. Notes never count toward progress.

The storage key is `nutrition-course:progress:v1`. Notes, checks, current week and the 20 latest checklist activities remain in the same browser across refreshes/restarts. They are not uploaded or synchronized across devices. Invalid stored data is not silently overwritten; Settings offers an explicit confirmed reset. Write failures display a warning instead of falsely claiming the notes were saved. Replacing the storage adapter and its subscription mechanism is the migration boundary for a future authenticated database.

## Editing content

Edit a week's seed in `src/data/course.ts`. Each seed includes Chinese/English titles, description, bilingual terms, objectives, practical task, reflection and resource IDs. Required checklists and vocabulary are derived centrally, not duplicated in pages. Add shared resources to `resources` and reference their ID from the appropriate weeks; maintain their `weeks` backlinks when editing associations.

Three official sources were verified on 2026-09-25: WHO Healthy diet, NIH ODS fact sheets and Harvard Healthy Eating Plate. KKM and specialist references remain visibly marked placeholders. No citations or video URLs are fabricated. Add verified YouTube objects to a week's `videos` array with `title`, `channel`, `url`, and optional `description`. The player validates YouTube hosts and 11-character IDs, uses a privacy-enhanced iframe, and supports watch, short and share URLs. Make a video's checklist required only when suitable content is available.

This MVP is a structured self-study curriculum, not a full textbook. Some specialist reading and all video selections remain editorial work. Learning activities and guidance are educational, not diagnosis, treatment, individualized calorie targets or supplement prescriptions. Medical/dietetic guidance notices appear in the course.

## Design and privacy

Warm neutrals, sage green, an original SVG plate illustration, bilingual labels, readable cards and a five-item mobile navigation. System fonts keep builds independent of remote font services. Every route is keyboard accessible, forms are labelled, progress indicators have ARIA values, and the native reset dialog traps focus and restores it to the triggering button. Links to external resources open in a new tab. No analytics or tracking scripts are included.
