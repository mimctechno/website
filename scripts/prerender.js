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
import { resolve, dirname } from "path";
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
  "/blog",
  "/blog/whatsapp-tally-integration-guide",
  "/blog/official-vs-unofficial-whatsapp-api",
  "/blog/what-is-erp-software-guide",
];

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

// Step 4: Render each route and write to dist/
let count = 0;
for (const url of routes) {
  const { html: appHtml, helmet } = render(url);

  // Build head tags from Helmet
  const headTags = [
    helmet?.title?.toString() ?? "",
    helmet?.meta?.toString() ?? "",
    helmet?.link?.toString() ?? "",
    helmet?.script?.toString() ?? "",
  ].join("\n    ");

  // Inject rendered HTML into the template
  const fullHtml = template
    // Replace closing </head> with helmet tags + closing tag
    .replace("</head>", `  ${headTags}\n  </head>`)
    // Inject rendered React app into the root div
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

  // Write to the correct output path
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
