import fs from 'fs';
import path from 'path';

const domain = 'https://www.mimctechnologies.com';
const today = new Date().toISOString().split('T')[0];

const staticRoutes = [
  '/',
  '/about',
  '/contact',
  '/careers',
  '/privacy',
  '/terms',
  '/services',
  '/services/whatsapp-api',
  '/services/tally-whatsapp-integration',
  '/services/erp-crm',
  '/services/web-development',
  '/services/digital-marketing',
  '/services/enterprise-consulting',
  '/blog'
];

function generateSitemap() {
  // Read posts to get dynamic slugs
  const postsFilePath = path.join(process.cwd(), 'src', 'data', 'posts.ts');
  let blogSlugs = [];
  
  if (fs.existsSync(postsFilePath)) {
    const postsContent = fs.readFileSync(postsFilePath, 'utf-8');
    // Simple regex to extract slug values
    const regex = /slug:\s*['"]([^'"]+)['"]/g;
    let match;
    while ((match = regex.exec(postsContent)) !== null) {
      blogSlugs.push(match[1]);
    }
  }

  // Generate XML
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  // Add static routes
  staticRoutes.forEach(route => {
    xml += `  <url>\n`;
    xml += `    <loc>${domain}${route === '/' ? '' : route}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>${route === '/' ? 'weekly' : 'monthly'}</changefreq>\n`;
    xml += `    <priority>${route === '/' ? '1.0' : '0.8'}</priority>\n`;
    xml += `  </url>\n`;
  });

  // Add dynamic blog routes
  blogSlugs.forEach(slug => {
    xml += `  <url>\n`;
    xml += `    <loc>${domain}/blog/${slug}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>monthly</changefreq>\n`;
    xml += `    <priority>0.7</priority>\n`;
    xml += `  </url>\n`;
  });

  xml += `</urlset>`;

  // Write to public/sitemap.xml
  const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
  fs.writeFileSync(sitemapPath, xml);
  console.log(`✅ Successfully generated sitemap.xml with ${staticRoutes.length + blogSlugs.length} routes.`);
}

generateSitemap();
