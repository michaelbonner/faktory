import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";
import client from "../client";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return client
      .fetch('*[_id == "global-config"] {lang}.lang[0]')
      .then((lang) => {
        return { ...initialProps, lang };
      });
  }

  render() {
    return (
      <Html lang={"en"}>
        <Head>
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />

          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=UA-113309177-1`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-113309177-1', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
