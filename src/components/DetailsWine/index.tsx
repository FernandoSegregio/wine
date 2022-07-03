import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import { RiArrowRightSLine } from 'react-icons/ri'
import {
  DetailsContainer,
  ImageContainer,
  OriginAndTypeContainer,
  PriceContainer,
  SommelierContainer,
  Details,
} from './style';

function DetailsWine(props: { wineItem: string; }) {
  const { wineItem } = props
  const wine = JSON.parse(wineItem)

  return (
    <DetailsContainer>
      <div>
        <Link href="/loja-vinhos">
          <span>
            <MdOutlineArrowBackIosNew />
            <p>Voltar</p>
          </span>
        </Link>
        <ImageContainer>
          <Image src={wine.image} alt={wine.name} width={381} height={579} />
        </ImageContainer>
      </div>
      <Details>
        <OriginAndTypeContainer>
          <div>
            <p>Vinhos</p>
            <RiArrowRightSLine />
            <p>{wine.country}</p>
            <RiArrowRightSLine />
            <span>{wine.region}</span>
          </div>
          <h1>{wine.name}</h1>
          <div>
            <Image src={wine.flag} alt={`Flag ${wine.country}`} width={16} height={16} />
            <p>{wine.country}</p>
            <p>{wine.type}</p>
            <p>{wine.classification}</p>
            <p>{wine.size || wine.volume}</p>
            <p>{wine.rating}</p>
          </div>
        </OriginAndTypeContainer>
        <PriceContainer>
          <h1>
            <span>R$</span>
            {(wine.priceMember).toString().split('.')[0]}
            ,
            <span>{(wine.priceMember).toFixed(2).toString().split('.')[1]}</span>
          </h1>
          <p>
            NÃO SÓCIO R$
            {' '}
            {(wine.priceNonMember).toFixed(2).replace('.', ',')}
          </p>
        </PriceContainer>
        <SommelierContainer>
          <h3>Comentário do Sommelier</h3>
          <p>{wine.sommelierComment}</p>
        </SommelierContainer>
        <button type="button">Adicionar</button>
      </Details>
    </DetailsContainer>
  )
}

export default DetailsWine;
