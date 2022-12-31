/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NEXT_PUBLIC_: process.env.NEXT_PUBLIC_API_ENDPOINT
  }
}

module.exports = nextConfig
