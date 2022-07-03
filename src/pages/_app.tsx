import React from 'react';
import type { AppProps } from 'next/app';
import { WineProvider } from '../context/wine';
import GlobalStyle from '../styles/GlobalStyle';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WineProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </WineProvider>
  );
}

export default MyApp;
