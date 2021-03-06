import React from "react";
import client from "../client";
import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";

const siteConfigQuery = `
  *[_id == "global-config"] {
    ...,
    logo {asset->{extension, url}},
    mainNavigation[] -> {
      ...,
      "title": page->title
    },
    footerNavigation[] -> {
      ...,
      "title": page->title
    }
  }[0]
  `;

function MyApp({ Component, pageProps }) {
  return (
    //Animate Presence will be required for any animations scrolled into view
    <AnimatePresence>
      <Component {...pageProps} />
    </AnimatePresence>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  // Add site config from sanity
  return client.fetch(siteConfigQuery).then((config) => {
    if (!config) {
      return { pageProps };
    }
    if (config && pageProps) {
      pageProps.config = config;
    }

    return { pageProps };
  });
};

export default MyApp;
