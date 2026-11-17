const { chromium } = require("playwright");
const path = require("path");
const fs = require("fs");

async function renderPoster() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1080, height: 1440 },
    deviceScaleFactor: 2, // 2x Retina rendering for print-grade sharpness
  });

  const page = await context.newPage();
  const htmlPath = path.resolve(__dirname, "poster-template.html");
  const fileUrl = `file://${htmlPath}`;

  console.log(`Loading poster template: ${fileUrl}`);
  await page.goto(fileUrl, { waitUntil: "networkidle" });
  await page.waitForTimeout(2000); // Allow Google Fonts to load

  const outJpg = path.resolve(
    __dirname,
    "../public/posters/tally-on-cloud-india-poster.jpg",
  );
  const outPng = path.resolve(
    __dirname,
    "../public/posters/tally-on-cloud-india-poster.png",
  );
  const brainJpg =
    "/home/sid/.gemini/antigravity-ide/brain/b6cf8ed6-d1b6-4dd6-a41a-0a4a059c01a2/tally_on_cloud_india_official.png";

  await page.screenshot({ path: outPng, type: "png" });
  await page.screenshot({ path: outJpg, type: "jpeg", quality: 95 });
  await page.screenshot({ path: brainJpg, type: "png" });

  console.log(
    `Rendered high-res posters successfully to ${outPng} and ${brainJpg}`,
  );
  await browser.close();
}

renderPoster().catch((err) => {
  console.error("Error rendering poster:", err);
  process.exit(1);
});
