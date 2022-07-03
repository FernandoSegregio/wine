import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import { WineContext } from '../../context/wine';
import { DetailsContainer, ImageContainer } from './style';

function DetailsWine() {
  const { wines } = useContext(WineContext)
  const { asPath } = useRouter();
  const idActual = asPath.split('vinho-')[1];

  const wine = wines.find((item: { id: number; }) => item.id === Number(idActual));

  useEffect(() => {
    console.log('sou eu', wine)
  }, [])
  return (
    <DetailsContainer>
      <div>
        <span>
          <MdOutlineArrowBackIosNew />
          <p>Voltar</p>
        </span>
        <ImageContainer>
          <Image src={wine.image} alt={wine.name} width={381} height={579} />
        </ImageContainer>
      </div>
    </DetailsContainer>
  )
}

export default DetailsWine;
