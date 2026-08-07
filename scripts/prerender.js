// scripts/prerender.js
// Generates static HTML for all 18 routes at build time.
// Strategy:
//   1. Build the SSR bundle (entry-server.tsx → dist-ssr/entry-server.js)
//   2. Import the render() function from it
//   3. For each route: call render(url), inject head tags into HTML template, write to dist/
//
// No Chromium, no puppeteer — pure Node.js + React renderToString.

import { build } from "vite";
import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { resolve, dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

const routes = [
  "/",
  "/about",
  "/partners",
  "/contact",
  "/careers",
  "/privacy",
  "/terms",
  "/services",
  "/services/whatsapp-api",
  "/services/tally-whatsapp-integration",
  "/services/erp-crm",
  "/services/web-development",
  "/services/digital-marketing",
  "/services/enterprise-consulting",
  "/blog/what-is-erp-software-guide",
  "/blog",
  "/blog/whatsapp-tally-integration-guide",
  "/blog/official-vs-unofficial-whatsapp-api",
];

const locationsData = JSON.parse(
  readFileSync(join(root, "src/data/whatsappLocations.json"), "utf8"),
);
locationsData.forEach((loc) => {
  routes.push(`/services/${loc.slug}`);
});

// Step 1: Build the SSR bundle
console.log("🔧 Building SSR bundle...");
await build({
  root,
  logLevel: "warn",
  build: {
    ssr: true,
    rollupOptions: {
      input: resolve(root, "src/entry-server.tsx"),
    },
    outDir: resolve(root, "dist-ssr"),
  },
});
console.log("✅ SSR bundle built.");

// Step 2: Import render function
const { render } = await import(resolve(root, "dist-ssr/entry-server.js"));

// Step 3: Read the client HTML shell
const template = readFileSync(resolve(root, "dist/index.html"), "utf-8");

// HEAD_TAG_RE: hoists only title/meta/link tags from the rendered body into <head>.
// JSON-LD <script> tags are valid in <body> (spec-compliant) so we leave them there.
// react-helmet-async with renderToString emits title/meta/link inline in the app HTML.
// ponytail: hoisting via regex is simpler than the streaming API or a custom renderer.
const HEAD_TAG_RE =
  /<(title|link|meta)([^>]*)(?:\/>|>((?:(?!<\/\1>).)*)<\/\1>)/gs;

// Step 4: Render each route and write to dist/
let count = 0;
for (const url of routes) {
  const { html: appHtml } = render(url);

  // Extract head-bound tags from the rendered app HTML and hoist them into <head>.
  // These are emitted inline by react-helmet-async's renderToString path.
  const headTags = [];
  const bodyHtml = appHtml.replace(HEAD_TAG_RE, (match) => {
    headTags.push(match);
    return "";
  });

  const fullHtml = template
    .replace("</head>", `  ${headTags.join("\n  ")}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${bodyHtml}</div>`);

  const outputDir =
    url === "/"
      ? resolve(root, "dist")
      : resolve(root, "dist", ...url.slice(1).split("/"));

  mkdirSync(outputDir, { recursive: true });
  writeFileSync(resolve(outputDir, "index.html"), fullHtml);
  console.log(`✅ Pre-rendered: ${url}`);
  count++;
}

console.log(`\n🚀 Pre-rendering complete. ${count} routes generated.`);
