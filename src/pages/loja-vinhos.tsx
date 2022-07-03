import axios from 'axios';
import { GetStaticProps } from 'next';
import React, { useContext, useEffect } from 'react';
import Aside from '../components/Aside';
import Cart from '../components/CartItems';
import Grid from '../components/GridWine';
import Header from '../components/Header';
import Search from '../components/SearchBar';
import { WineContext } from '../context/wine';
import { HomeProps } from '../interfaces';
import GlobalStyle from '../styles/GlobalStyle';
import Container from './_style';

export default function Home({ winesApi, totalProduct }: HomeProps) {
  const { setWines } = useContext(WineContext);

  useEffect(() => {
    setWines(winesApi)
  }, [winesApi])

  return (
    <>
      <Cart />
      <Search />
      <Header />
      <Container>
        <Aside />
        <main>
          <h1>
            <span>{totalProduct}</span>
            {' '}
            produtos encontrados
          </h1>
          <Grid winesApi={winesApi} />
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

  return {
    props: {
      winesApi: data.items,
      totalProduct: data.totalItems,
    },
    revalidate: 60 * 60 * 24,
  };
};
