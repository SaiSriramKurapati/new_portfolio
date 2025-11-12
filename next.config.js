/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/new_portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/new_portfolio' : '',
}

module.exports = nextConfig

