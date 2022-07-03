/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
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

function Card({ winesApi }: WineProps) {
  const [cookie, setCookie] = useCookies<string>(['wine']);

  const { winesFiltered } = useContext(WineContext);

  function nextDetailsWine(id: number) {
    const wine = winesApi.find((item: { id: number; }) => item.id === id);

    setCookie('wine', JSON.stringify(wine), {
      path: '/loja-vinhos',
      maxAge: 3600, // Expires after 1hr
      sameSite: true,
    })
    Router.push({ pathname: `/loja-vinhos/${id}` })
  }

  const renderWines = ((winesFiltered.length > 0) ? winesFiltered : winesApi)

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
                alt="teste"
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
          <ButtonAdd>ADICIONAR</ButtonAdd>
        </CardContainer>
      ))}
    </>
  );
}

export default Card;
