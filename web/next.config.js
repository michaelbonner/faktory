/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/hire-us",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/home-2",
        destination: "/",
        permanent: true,
      },
      {
        source: "/industry",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/learn",
        destination: "/who-we-are",
        permanent: true,
      },
      {
        source: "/portfolio",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/portfolio/primary-childrens-hospital-win",
        destination: "/case-studies/primary-childrens-hospital",
        permanent: true,
      },
      {
        source: "/portfolio/intermountain-healthcare-connect-care",
        destination: "/work/intermountain-connect-care",
        permanent: true,
      },
      {
        source: "/portfolio/dominion-energy",
        destination: "/case-studies/dominion-energy-thermwise",
        permanent: true,
      },
      {
        source: "/portfolio/intermountain-healthcare-mission",
        destination: "/work/heredigene",
        permanent: true,
      },
      {
        source: "/portfolio/ken-garff",
        destination: "/work/ken-garff-legacy-wall",
        permanent: true,
      },
      {
        source: "/portfolio/wcf-insurance",
        destination: "/work/wcf-insurance",
        permanent: true,
      },
      {
        source: "/portfolio/hold-on-to-dear-life",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/category/uncategorized/page/2",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/portfolio/cicero-website",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/portfolio/ivanti",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/tag/advertising",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/portfolio/jazz",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/tag/branding",
        destination: "/work",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
