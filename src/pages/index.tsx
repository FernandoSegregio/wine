import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import GlobalStyle from '../styles/GlobalStyle';

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&family=Saira:wght@300;400;500;700&display=swap" rel="stylesheet" />
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
