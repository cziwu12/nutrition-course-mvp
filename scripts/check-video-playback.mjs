import { chromium } from "@playwright/test";
import fs from "node:fs";
const browser = await chromium.launch();
const records = [];
try {
  const page = await browser.newPage({
    viewport: { width: 1365, height: 900 },
  });
  for (const n of process.argv.length > 2
    ? process.argv.slice(2).map(Number)
    : Array.from({ length: 24 }, (_, i) => i + 1).filter(
        (n) => ![17, 19, 23, 24].includes(n),
      )) {
    await page.goto(`http://127.0.0.1:3000/course/week/${n}`, {
      waitUntil: "domcontentloaded",
    });
    const iframe = page.locator(".video-card iframe");
    await iframe.scrollIntoViewIfNeeded();
    const frame = await (await iframe.elementHandle()).contentFrame();
    const failedRequests = [];
    const onFailure = (request) => {
      if (!request.url().startsWith("http://127.0.0.1"))
        failedRequests.push({
          url: new URL(request.url()).origin,
          error: request.failure()?.errorText,
        });
    };
    page.on("requestfailed", onFailure);
    let note = "";
    let playing = false;
    let attempts = 0;
    // Embedded controls can appear before their event handlers are ready.
    // Retry one ordinary user click; never force a player into a successful state.
    for (attempts = 1; attempts <= 2 && !playing; attempts++) {
      try {
        await frame
          .locator(".ytp-large-play-button, .ytmCuedOverlayPlayButton")
          .first()
          .click({ timeout: 12000 });
        await frame.waitForFunction(
          () => {
            const video = document.querySelector("video");
            return video && !video.paused && video.currentTime > 1;
          },
          {},
          { timeout: 10000 },
        );
        playing = true;
      } catch {
        note = "Playback did not advance past one second on this attempt";
      }
    }
    if (playing)
      note = "Playback advanced beyond one second after a user click";
    const text = await frame
      .locator("body")
      .innerText({ timeout: 3000 })
      .catch(() => "Frame text unavailable");
    const videoState = await frame
      .locator("video")
      .evaluateAll((videos) =>
        videos.map((v) => ({
          paused: v.paused,
          currentTime: v.currentTime,
          readyState: v.readyState,
          networkState: v.networkState,
          error: v.error?.message ?? null,
        })),
      )
      .catch(() => []);
    page.off("requestfailed", onFailure);
    records.push({
      videoState,
      failedRequests,
      week: n,
      url: await iframe.getAttribute("src"),
      playing,
      note,
      playerText: text.split("\n").slice(0, 4).join("\n"),
      checkedAt: new Date().toISOString(),
    });
    console.log(JSON.stringify(records.at(-1)));
    if (n === 7)
      await page.screenshot({
        path: "test-results/digestion-video-desktop.png",
      });
  }
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("http://127.0.0.1:3000/course/week/7");
  await page.locator(".lesson-process").scrollIntoViewIfNeeded();
  await page.screenshot({ path: "test-results/digestion-mobile.png" });
  fs.writeFileSync(
    "docs/video-playback-check.json",
    JSON.stringify(
      [
        ...JSON.parse(
          fs.readFileSync("docs/video-playback-check.json", "utf8"),
        ).filter((old) => !records.some((record) => record.week === old.week)),
        ...records,
      ].sort((a, b) => a.week - b.week),
      null,
      2,
    ) + "\n",
  );
} finally {
  await browser.close();
}
