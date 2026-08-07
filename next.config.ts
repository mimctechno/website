import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",        // static HTML export — same as current Vite build
  trailingSlash: true,     // /services/ → generates services/index.html (matches current structure)
  images: {
    unoptimized: true,     // required for static export (no Next.js image server)
  },
};

export default nextConfig;
