import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";

import { LogoJsonLd } from "next-seo";
import Header from "./Header";
import Footer from "./Footer";

function Layout(props) {
  const { config, children } = props;

  if (!config) {
    console.error("Missing config");
    return <div>Missing config</div>;
  }

  const { title, mainNavigation, footerNavigation, footerText, logo, url } =
    config;
  const logoUrl = logo && logo.asset && logo.asset.url;

  const fullTitle = `${title} | Faktory Inc.`;

  return (
    <div>
      <Head>
        <title>{fullTitle}</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width, viewport-fit=cover"
        />
      </Head>
      <Header title={title} navItems={mainNavigation} logo={logo} />
      <main>{children}</main>
      <Footer navItems={footerNavigation} text={footerText} />
      {logoUrl && url && <LogoJsonLd url={url} logo={logoUrl} />}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
  config: PropTypes.shape({
    title: PropTypes.string,
    mainNavigation: PropTypes.arrayOf(PropTypes.object),
    footerNavigation: PropTypes.arrayOf(PropTypes.object),
    footerText: PropTypes.arrayOf(PropTypes.object),
    logo: PropTypes.shape({
      asset: PropTypes.shape({
        url: PropTypes.string,
      }),
    }),
    url: PropTypes.string,
  }),
};

export default Layout;
