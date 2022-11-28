/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")({
  env: {},
  devIndicators: {
    autoPrerender: false,
  },
  dest: "public",
  register: true,
  skipWaiting: true,
  // disable: process.env.NODE_ENV === "development",
  buildExcludes: [/middleware-manifest.json$/],
});

const nextConfig = {
  reactStrictMode: true,
};

module.exports =
  process.env.NODE_ENV === "development" ? nextConfig : withPWA(nextConfig);
