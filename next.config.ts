import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,

  images: {
    // Static export requires unoptimized, but we use Next.js Image component
    // for correct srcset generation during build
    unoptimized: true,
    // Declare image sizes for better responsive image generation
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
