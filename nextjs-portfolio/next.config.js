/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Only apply basePath and assetPrefix in production for GitHub Pages
  ...(process.env.NODE_ENV === 'production' && {
    basePath: '/myPortfolio2.0',
    assetPrefix: '/myPortfolio2.0/',
  }),
}

module.exports = nextConfig
