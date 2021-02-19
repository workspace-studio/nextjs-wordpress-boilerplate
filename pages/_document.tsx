import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import theme from 'styles/themes';

import { ServerStyleSheets } from '@material-ui/core';

export default class MyDocument extends Document {
  render() {
    const {
      palette: { primary },
    } = theme;

    return (
      <Html lang="en">
        <Head />
        <Head>
          <meta name="theme-color" content={primary.main} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async ctx => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
  };
};
