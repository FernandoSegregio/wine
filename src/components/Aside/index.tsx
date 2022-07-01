import React from 'react';
import AsideContainer from './style';

function Aside() {
  return (
    <AsideContainer>
      <h1>Refine sua busca</h1>
      <p>Por preço</p>
      <input type="radio" value="1" name="price" />
      {' '}
      Até R$40,00
      <input type="radio" value="2" name="price" />
      R$40,00 a R$100,00
      <input type="radio" value="3" name="price" />
      {' '}
      R$100,00 a R$200,00
      <input type="radio" value="4" name="price" />
      {' '}
      R$200,00 a R$500,00
      <input type="radio" value="5" name="price" />
      {' '}
      Acima de R$500,00
    </AsideContainer>
  )
}

export default Aside
