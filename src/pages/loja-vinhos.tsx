import axios from 'axios';
import { GetStaticProps } from 'next';
import React, { useState } from 'react';
import Aside from '../components/Aside';
import Cart from '../components/CartItems';
import Grid from '../components/GridWine';
import Header from '../components/Header';
import { HomeProps } from '../interfaces';
import GlobalStyle from '../styles/GlobalStyle';
import Container from './_style';

export default function Home({ wines, totalProduct }: HomeProps) {
  const [open, setOpen] = useState(true);
  return (
    <>
      <GlobalStyle />
      <Cart open={open} setOpen={setOpen} />
      <Header setOpen={setOpen} />
      <Container>
        <Aside />
        <main>
          <h1>
            <span>{totalProduct}</span>
            {' '}
            produtos encontrados
          </h1>
          <Grid wines={wines} />
        </main>
      </Container>
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
