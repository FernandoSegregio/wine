import React from 'react';
import type { AppProps } from 'next/app';
import { WineProvider } from '../context/wine';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WineProvider>
      <Component {...pageProps} />
    </WineProvider>
  );
}

export default MyApp;
