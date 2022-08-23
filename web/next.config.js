/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/hire-us/",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/home-2/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/industry/",
        destination: "/work",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
