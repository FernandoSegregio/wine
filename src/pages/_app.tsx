import React from 'react';
import type { AppProps } from 'next/app';
import { CookiesProvider } from 'react-cookie'
import { WineProvider } from '../context/wine';
import GlobalStyle from '../styles/GlobalStyle';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WineProvider>
      <GlobalStyle />
      <CookiesProvider>
        <Component {...pageProps} />
      </CookiesProvider>
    </WineProvider>
  );
}

export default MyApp;
