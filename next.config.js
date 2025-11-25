/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['linear-hub.com.br'],
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig
