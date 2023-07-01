/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['files.stripe.com'],
  },

  compiler: {
    styledComponents: true,
  },

  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig
