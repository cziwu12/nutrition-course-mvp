import fs from "node:fs";
const ids = process.argv.slice(2);
const results = [];
for (const id of ids) {
  const url = `https://www.youtube.com/watch?v=${id}`;
  try {
    const response = await fetch(
      `https://www.youtube.com/oembed?url=${encodeURIComponent(url)}&format=json`,
    );
    if (!response.ok) throw new Error(`oEmbed ${response.status}`);
    const data = await response.json();
    const watch = await (await fetch(url)).text();
    const marker = "var ytInitialPlayerResponse = ";
    let player;
    if (watch.includes(marker)) {
      const raw = watch.split(marker)[1];
      const end = raw.indexOf(";</script>");
      try {
        player = JSON.parse(raw.slice(0, end));
      } catch {}
    }
    results.push({
      id,
      url,
      title: data.title,
      channel: data.author_name,
      channelUrl: data.author_url,
      oembed: true,
      embedHtml: data.html,
      checkedAt: new Date().toISOString(),
      durationSeconds: Number(player?.videoDetails?.lengthSeconds) || null,
      embeddable: player?.playabilityStatus?.playableInEmbed ?? null,
      playability: player?.playabilityStatus?.status ?? null,
    });
  } catch (error) {
    results.push({ id, error: String(error) });
  }
}
const file = "docs/video-verification.json";
const prior = fs.existsSync(file)
  ? JSON.parse(fs.readFileSync(file, "utf8"))
  : [];
fs.writeFileSync(
  file,
  JSON.stringify(
    [...prior.filter((x) => !ids.includes(x.id)), ...results],
    null,
    2,
  ) + "\n",
);
console.log(
  JSON.stringify(
    results.map((record) => ({ ...record, embedHtml: undefined })),
    null,
    2,
  ),
);
