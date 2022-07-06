/* eslint-disable no-multi-assign */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from 'react'
import Image from 'next/image';
import Router from 'next/router';
import { useCookies } from 'react-cookie';
import {
  ImageStyle,
  CardContainer,
  Name,
  DiscountContainer,
  ValueDiscount,
  PercentDiscount,
  MemberPriceContainer,
  Price,
  Member,
  NonMember,
  ButtonAdd,
} from './style'
import { WineProps } from '../../interfaces';
import blackIcon from '../../../public/images/card/black-wine.svg';
import { WineContext } from '../../context/wine';
import { addLocalStorage, restoreCartList } from '../../helpers';

function Card({ winesApi }: WineProps) {
  const [cookie, setCookie] = useCookies<string>(['wine']);

  const {
    quantityRender, setQuantityRender, winesFiltered, cartList, setCartList,
  } = useContext(WineContext);

  useEffect(() => {
    restoreCartList(setCartList);
  }, [])

  function nextDetailsWine(id: number) {
    const wine = winesApi.find((item: { id: number; }) => item.id === id);

    setCookie('wine', JSON.stringify(wine), {
      path: '/loja-vinhos',
      maxAge: 3600, // Expires after 1hr
      sameSite: true,
    })
    Router.push({ pathname: `/loja-vinhos/${id}` })
  }

  const renderWines = ((winesFiltered.length > 0)
    ? winesFiltered.slice(0, quantityRender)
    : winesApi)

  function addToCart(e: { currentTarget: { value: string } }) {
    const { value } = e.currentTarget;
    const item = renderWines.filter((wine) => wine.id === Number(value));

    const cart = {
      id: item[0].id,
      quantity: 1,
      name: item[0].name,
      image: item[0].image,
      priceMember: item[0].priceMember,
    }

    if (cartList.length === 0) {
      setCartList([cart]);
      addLocalStorage([cart]);
    }

    if (cartList.length > 0) {
      const varifyCartList = cartList.filter((it) => it.id === cart.id)
      const itemIndex = cartList.findIndex((i) => i.id === Number(value));
      console.log('sou o varifyCartList', varifyCartList);

      if (varifyCartList.length === 0) {
        setCartList([...cartList, cart]);
        addLocalStorage([...cartList, cart]);
      }

      if (varifyCartList.length > 0) {
        const newCart = [...cartList]
        newCart[itemIndex].quantity = newCart[itemIndex].quantity += 1
        setCartList(newCart)
        addLocalStorage(newCart)
      }
    }
  }

  return (
    <>
      { renderWines.map((item) => (
        <CardContainer key={item.id}>
          <button
            type="button"
            onClick={() => nextDetailsWine(item.id)}
          >
            <section>
              <ImageStyle
                src={item.image}
                alt={item.name}
                height={178}
                width={119}
              />
              <Name>{item.name}</Name>
              <Image
                src={blackIcon}
                alt="Logo Black Wine"
                width={38.94}
                height={38.94}
              />
              <DiscountContainer>
                <ValueDiscount>
                  R$
                  {' '}
                  {(item.price - item.priceMember).toFixed(2).replace('.', ',')}
                </ValueDiscount>
                <PercentDiscount>
                  {item.discount}
                  %
                  {' '}
                  OFF
                </PercentDiscount>
              </DiscountContainer>
              <MemberPriceContainer>
                <Member>SÓCIO WINE</Member>
                {' '}
                <Price>
                  <span>R$</span>
                  {(item.priceMember).toString().split('.')[0]}
                  ,
                  <span>{(item.priceMember).toFixed(2).toString().split('.')[1]}</span>
                </Price>
              </MemberPriceContainer>
              <NonMember>
                NÃO SÓCIO R$
                {' '}
                {(item.priceNonMember).toFixed(2).replace('.', ',')}
              </NonMember>
            </section>
          </button>
          <ButtonAdd
            onClick={(e) => addToCart(e)}
            value={item.id}
          >
            ADICIONAR
          </ButtonAdd>
        </CardContainer>
      ))}
    </>
  );
}

export default Card;
