import fs from "fs";
import path from "path";

const domain = "https://www.mimctechnologies.com";
const today = new Date().toISOString().split("T")[0];

const staticRoutes = [
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
  "/locations",
  "/blog",
];

const TALLY_COUNTRY_CODES = new Set(["IN", "AE", "SA", "QA", "KW", "BH", "OM"]);

function generateSitemap() {
  // Read posts to get dynamic slugs
  const postsFilePath = path.join(process.cwd(), "src", "data", "posts.ts");
  let blogSlugs = [];

  if (fs.existsSync(postsFilePath)) {
    const postsContent = fs.readFileSync(postsFilePath, "utf-8");
    const regex = /slug:\s*['"]([^'"]+)['"]/g;
    let match;
    while ((match = regex.exec(postsContent)) !== null) {
      blogSlugs.push(match[1]);
    }
  }

  // Read jobs data
  const jobsFilePath = path.join(process.cwd(), "src", "data", "jobs.ts");
  let jobSlugs = [];
  if (fs.existsSync(jobsFilePath)) {
    const jobsContent = fs.readFileSync(jobsFilePath, "utf-8");
    const regex = /slug:\s*['"]([^'"]+)['"]/g;
    let match;
    while ((match = regex.exec(jobsContent)) !== null) {
      jobSlugs.push(match[1]);
    }
  }

  // Read locations data
  const locationsFilePath = path.join(
    process.cwd(),
    "src",
    "data",
    "whatsappLocations.json",
  );
  let legacyLocationSlugs = [];
  let citySlugs = [];
  let tallyCitySlugs = [];

  if (fs.existsSync(locationsFilePath)) {
    const locationsContent = JSON.parse(
      fs.readFileSync(locationsFilePath, "utf-8"),
    );
    locationsContent.forEach((loc) => {
      legacyLocationSlugs.push(loc.slug);
      const citySlug = loc.slug.replace(/^whatsapp-api-/, "");
      citySlugs.push(citySlug);
      if (TALLY_COUNTRY_CODES.has(loc.countryCode)) {
        tallyCitySlugs.push(citySlug);
      }
    });
  }

  // Generate XML
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  // Add static routes
  staticRoutes.forEach((route) => {
    xml += `  <url>\n`;
    xml += `    <loc>${domain}${route === "/" ? "" : route}/</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>${route === "/" ? "weekly" : "monthly"}</changefreq>\n`;
    xml += `    <priority>${route === "/" ? "1.0" : "0.8"}</priority>\n`;
    xml += `  </url>\n`;
  });

  // Add dynamic career routes
  jobSlugs.forEach((slug) => {
    xml += `  <url>\n`;
    xml += `    <loc>${domain}/careers/${slug}/</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>weekly</changefreq>\n`;
    xml += `    <priority>0.7</priority>\n`;
    xml += `  </url>\n`;
  });

  // Add dynamic blog routes
  blogSlugs.forEach((slug) => {
    xml += `  <url>\n`;
    xml += `    <loc>${domain}/blog/${slug}/</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>monthly</changefreq>\n`;
    xml += `    <priority>0.7</priority>\n`;
    xml += `  </url>\n`;
  });

  // Add Tally Prime Invoicing regional routes (India & GCC only)
  tallyCitySlugs.forEach((citySlug) => {
    xml += `  <url>\n`;
    xml += `    <loc>${domain}/services/tally-whatsapp-integration/${citySlug}/</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>weekly</changefreq>\n`;
    xml += `    <priority>0.8</priority>\n`;
    xml += `  </url>\n`;
  });

  // Add Enterprise ERP & CRM regional routes (All commercial metros)
  citySlugs.forEach((citySlug) => {
    xml += `  <url>\n`;
    xml += `    <loc>${domain}/services/erp-crm/${citySlug}/</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>weekly</changefreq>\n`;
    xml += `    <priority>0.8</priority>\n`;
    xml += `  </url>\n`;
  });

  // Add Official Meta WhatsApp API regional routes (All commercial metros)
  citySlugs.forEach((citySlug) => {
    xml += `  <url>\n`;
    xml += `    <loc>${domain}/services/whatsapp-api/${citySlug}/</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>weekly</changefreq>\n`;
    xml += `    <priority>0.8</priority>\n`;
    xml += `  </url>\n`;
  });

  // Add Modern Web & Next.js Development regional routes
  citySlugs.forEach((citySlug) => {
    xml += `  <url>\n`;
    xml += `    <loc>${domain}/services/web-development/${citySlug}/</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>weekly</changefreq>\n`;
    xml += `    <priority>0.8</priority>\n`;
    xml += `  </url>\n`;
  });

  // Add Technical SEO & Programmatic Search regional routes
  citySlugs.forEach((citySlug) => {
    xml += `  <url>\n`;
    xml += `    <loc>${domain}/services/digital-marketing/${citySlug}/</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>weekly</changefreq>\n`;
    xml += `    <priority>0.8</priority>\n`;
    xml += `  </url>\n`;
  });

  // Add Enterprise Architecture & IT Consulting regional routes
  citySlugs.forEach((citySlug) => {
    xml += `  <url>\n`;
    xml += `    <loc>${domain}/services/enterprise-consulting/${citySlug}/</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>weekly</changefreq>\n`;
    xml += `    <priority>0.8</priority>\n`;
    xml += `  </url>\n`;
  });

  xml += `</urlset>`;

  // Write to public/sitemap.xml
  const sitemapPath = path.join(process.cwd(), "public", "sitemap.xml");
  fs.writeFileSync(sitemapPath, xml);
  const totalUrls =
    staticRoutes.length +
    jobSlugs.length +
    blogSlugs.length +
    tallyCitySlugs.length +
    citySlugs.length * 5;
  console.log(`✅ Successfully generated clean canonical sitemap.xml with ${totalUrls} routes.`);
}

generateSitemap();
