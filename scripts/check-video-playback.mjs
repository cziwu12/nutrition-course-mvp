import { chromium } from "@playwright/test";
import fs from "node:fs";
const browser = await chromium.launch();
const records = [];
try {
  const page = await browser.newPage({
    viewport: { width: 1365, height: 900 },
  });
  for (let n = 1; n <= 8; n++) {
    await page.goto(`http://127.0.0.1:3000/course/week/${n}`, {
      waitUntil: "domcontentloaded",
    });
    const iframe = page.locator(".video-card iframe");
    await iframe.scrollIntoViewIfNeeded();
    const frame = await (await iframe.elementHandle()).contentFrame();
    const failedRequests=[];
    const onFailure=request=>{ if (!request.url().startsWith('http://127.0.0.1')) failedRequests.push({url:new URL(request.url()).origin,error:request.failure()?.errorText}); };
    page.on('requestfailed',onFailure);
    let note = "";
    try {
      await frame
        .locator(".ytp-large-play-button, .ytmCuedOverlayPlayButton")
        .first()
        .click({ timeout: 12000 });
    } catch {
      note = "Play control not available within 12 seconds";
    }
    let playing = false;
    try {
      await frame.waitForFunction(
        () => {
          const v = document.querySelector("video");
          return v && !v.paused && v.currentTime > 0;
        },
        {},
        { timeout: 6000 },
      );
      playing = true;
    } catch {
      /* Report the observed failure; never claim playback without evidence. */
    }
    const text = await frame
      .locator("body")
      .innerText({ timeout: 3000 })
      .catch(() => "Frame text unavailable");
    const videoState=await frame.locator('video').evaluateAll(videos=>videos.map(v=>({paused:v.paused,currentTime:v.currentTime,readyState:v.readyState,networkState:v.networkState,error:v.error?.message??null}))).catch(()=>[]);
    page.off('requestfailed',onFailure);
    records.push({
      videoState,failedRequests,
      week: n,
      url: await iframe.getAttribute("src"),
      playing,
      note,
      playerText: text.slice(0, 800),
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
    JSON.stringify(records, null, 2) + "\n",
  );
} finally {
  await browser.close();
}
