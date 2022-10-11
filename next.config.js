/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/life/0',
        permanent: false,
      },
      {
        source: '/:tag',
        destination: '/:tag/0',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
