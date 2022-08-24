/** @type {import('next').NextConfig} */

const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "origin-when-cross-origin",
  },
];

const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
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
        source: "/portfolio/childrens-miracle-network",
        destination: "/case-studies/primary-childrens-hospital",
        permanent: true,
      },
      {
        source: "/portfolio/primary-childrens-hospital-environmental",
        destination: "/case-studies/primary-childrens-hospital",
        permanent: true,
      },
      {
        source: "/portfolio/intermountain-healthcare-connect-care",
        destination: "/work/intermountain-connect-care",
        permanent: true,
      },
      {
        source: "/portfolio/intermountain-healthcare-live-well",
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
        source: "/tag/marketing",
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
      {
        source: "/see",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/2020/01/15/do-more-than-be-where-your-audience-is",
        destination: "/who-we-are",
        permanent: false,
      },
      {
        source: "/2019/05/31/ideas-that-scare-us",
        destination: "/who-we-are",
        permanent: false,
      },
      {
        source: "/sitemap.xml",
        destination: "/api/sitemap",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
