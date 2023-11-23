/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.bcbits.com',
      },
    ],
  },
};

module.exports = nextConfig;
