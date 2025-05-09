/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['funny-acoustics-800f9a702f.strapiapp.com'],
  },
  experimental: {
    optimizeFonts: false,
    webpackBuildWorker: false,
  },
  webpack: (config) => {
    // Optimize webpack build
    config.optimization = {
      ...config.optimization,
      minimize: true,
      moduleIds: 'deterministic',
    };
    return config;
  },
};

module.exports = nextConfig;
