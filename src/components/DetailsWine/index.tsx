import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react'
import { WineContext } from '../../context/wine';

function DetailsWine() {
  const { wines } = useContext(WineContext)
  const { asPath } = useRouter();
  const idActual = asPath.split('vinho-')[1];

  const wine = wines.find((item: { id: number; }) => item.id === Number(idActual));

  useEffect(() => {
    console.log('sou eu', wine)
  }, [])
  return (
    <div>Details</div>
  )
}

export default DetailsWine;
