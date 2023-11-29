/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.bcbits.com',
      },
      {
        protocol: 'https',
        hostname: '**.mzstatic.com',
      },
    ],
  },
};

module.exports = nextConfig;
