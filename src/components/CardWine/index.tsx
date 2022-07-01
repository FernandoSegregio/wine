import React from 'react'
import Image from 'next/image';
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

function Card({ wines }: WineProps) {
  return (
    <>
      { wines.map((item) => (
        <CardContainer key={item.id}>
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
          <ButtonAdd>ADICIONAR</ButtonAdd>
        </CardContainer>
      ))}
    </>
  );
}

export default Card;
