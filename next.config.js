/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
  // Disable server-side features as we're building a desktop app
  trailingSlash: true,
};

module.exports = nextConfig; 