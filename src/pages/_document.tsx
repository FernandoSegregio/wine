import React from 'react';
import {
  Html, Head, Main, NextScript,
} from 'next/document'

function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&family=Saira:wght@300;400;500;700&display=swap" rel="stylesheet" />

        <title> Wine | Compre vinhos online com descontos exclusivos!</title>

        <meta name="description" content="Vinho tinto, rosé, branco ou espumante. Na Wine, você encontra os melhores rótulos pelos menores preços. Acesse a loja ou baixe nosso aplicativo!" />

        <link href="https://img.wine.com.br/fenix/image/_big_bang/icons/favicon/favicon.ico" rel="shortcut icon" type="image/x-icon" />
        <link href="https://img.wine.com.br/fenix/image/_big_bang/icons/favicon/apple-touch-icon.png" />
        <link href="https://img.wine.com.br/fenix/image/_big_bang/icons/favicon/favicon-16x16.png" sizes="16x16" />
        <link href="https://img.wine.com.br/fenix/image/_big_bang/icons/favicon/favicon-32x32.png" sizes="32x32" />
        <link href="https://img.wine.com.br/fenix/image/_big_bang/icons/favicon/mstile-150x150.png" sizes="150x150" />
        <link href="https://img.wine.com.br/fenix/image/_big_bang/icons/favicon/android-chrome-192x192.png" sizes="192x192" />
        <link href="https://img.wine.com.br/fenix/image/_big_bang/icons/favicon/android-chrome-256x256.png" sizes="256x256" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document;
