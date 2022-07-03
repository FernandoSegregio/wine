import React from 'react'
import Cart from '../components/CartItems';
import DetailsWine from '../components/DetailsWine';
import Header from '../components/Header';
import Search from '../components/SearchBar';

function Details() {
  return (
    <>
      <Cart />
      <Search />
      <Header />
      <DetailsWine />
    </>
  )
}

export default Details
