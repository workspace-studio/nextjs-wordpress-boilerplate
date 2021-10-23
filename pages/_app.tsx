import React from 'react';
import Head from 'next/head';
import theme from 'styles/themes';
import createEmotionCache from 'styles/themes/createEmotionCache';

import { AppProps as NextAppProps } from 'next/app';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { CacheProvider, EmotionCache } from '@emotion/react';

import '../styles/index.scss';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface AppProps extends NextAppProps {
  emotionCache?: EmotionCache;
}

const App: React.FC<AppProps> = ({ Component, pageProps, emotionCache = clientSideEmotionCache }) => (
  <CacheProvider value={emotionCache}>
    <Head>
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
    </Head>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  </CacheProvider>
);

export default App;
