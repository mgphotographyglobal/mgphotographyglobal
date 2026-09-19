import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // No longer output:"export" — the blog is now database-backed (Supabase)
  // with on-demand revalidation, which needs a server runtime. Netlify's
  // Next.js Runtime auto-detects this (no `output` set) and deploys it as
  // a hybrid app: every route with no dynamic data dependency is still
  // served pre-rendered/static exactly as before, while blog routes use
  // ISR + on-demand revalidation. See docs/BLOG_ADMIN_CHATGPT_WORK_AUTOMATION.md.
  trailingSlash: true,

  images: {
    // Static export required this to be true; a real server runtime means
    // next/image can now optimize on demand via Netlify's Image CDN.
    unoptimized: false,
    deviceSizes: [375, 430, 768, 1024, 1280, 1440, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ["image/webp", "image/avif"],
  },

  // Remove X-Powered-By header
  poweredByHeader: false,

  // Compiler optimizations
  compiler: {
    // Remove console.log in production (keeps errors/warnings)
    removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error", "warn"] } : false,
  },

};

export default nextConfig;
