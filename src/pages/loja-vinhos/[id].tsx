import { NextPageContext } from 'next';
import React from 'react'
import Cart from '../../components/CartItems';
import DetailsWine from '../../components/DetailsWine';
import Header from '../../components/Header';
import Search from '../../components/SearchBar';
import { parseCookies } from '../../helpers'
import { DataWine } from '../../interfaces';

function Details({ data }:DataWine) {
  return (
    <>
      <Cart />
      <Search />
      <Header />
      <DetailsWine wineItem={data.wine} />
    </>
  )
}

export default Details

Details.getInitialProps = async ({ req, res }: NextPageContext) => {
  const data = parseCookies(req)

  if (res) {
    if (Object.keys(data).length === 0 && data.constructor === Object) {
      res.writeHead(301, { Location: '/loja-vinhos' })
      res.end()
    }
  }

  return {
    data: data && data,
  }
}
