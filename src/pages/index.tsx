import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import GlobalStyle from '../styles/GlobalStyle';

export default function Home() {
  return (
    <>
      <Head>
        <link href="https://img.wine.com.br/fenix/image/_big_bang/icons/favicon/favicon.ico" rel="shortcut icon" type="image/x-icon" />
      </Head>
      <GlobalStyle />
      <Header />

      <main>
        main
      </main>

      <footer>
        footer
      </footer>
    </>
  );
}
