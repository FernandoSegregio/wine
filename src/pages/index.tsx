import axios from 'axios';
import { GetStaticProps } from 'next';
import React from 'react';
import Header from '../components/Header';
import GlobalStyle from '../styles/GlobalStyle';

export default function Home() {
  return (
    <>
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

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await axios.get('https://wine-back-test.herokuapp.com/products?page=1&limit=9');
  console.log(data.totalItems);

  return {
    props: {
      wines: data.items,
      totalProduct: data.totalItems,
    },
    revalidate: 60 * 60 * 24,
  };
};
