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
      {
        source: "/learn/",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/portfolio/",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/portfolio/primary-childrens-hospital-win/",
        destination: "/case-studies/primary-childrens-hospital",
        parmanent: true,
      },
      {
        source: "/portfolio/intermountain-healthcare-connect-care/",
        destination: "/work/intermountain-connect-care",
        parmanent: true,
      },
      {
        source: "/portfolio/dominion-energy/",
        destination: "/case-studies/dominion-energy-thermwise",
        parmanent: true,
      },
      {
        source: "/portfolio/intermountain-healthcare-mission/",
        destination: "/work/heredigene",
        parmanent: true,
      },
      {
        source: "/portfolio/ken-garff/",
        destination: "/work/ken-garff-legacy-wall",
        parmanent: true,
      },
      {
        source: "/portfolio/wcf-insurance/",
        destination: "/work/wcf-insurance",
        parmanent: true,
      },
      {
        source: "/portfolio/hold-on-to-dear-life/",
        destination: "/work",
        parmanent: true,
      },
      {
        source: "/category/uncategorized/page/2/",
        destination: "/work",
        parmanent: true,
      },
      {
        source: "/portfolio/cicero-website/",
        destination: "/work",
        parmanent: true,
      },
      {
        source: "/portfolio/ivanti/",
        destination: "/work",
        parmanent: true,
      },
      {
        source: "/tag/advertising/",
        destination: "/work",
        parmanent: true,
      },
      {
        source: "/portfolio/jazz/",
        destination: "/work",
        parmanent: true,
      },
      {
        source: "/tag/branding/",
        destination: "/work",
        parmanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
