import React from 'react';
import AsideContainer from './style';

function Aside() {
  return (
    <AsideContainer>
      <h1>Refine sua busca</h1>
      <p>Por preço</p>
      <label htmlFor="price-one">
        <input type="radio" value="1" name="price" id="price-one" />
        Até R$40,00
      </label>
      <label htmlFor="price-two">
        <input type="radio" value="2" name="price" id="price-two" />
        R$40,00 a R$100,00
      </label>
      <label htmlFor="price-three">
        <input type="radio" value="3" name="price" id="price-three" />
        R$100,00 a R$200,00
      </label>
      <label htmlFor="price-four">
        <input type="radio" value="4" name="price" id="price-four" />
        R$200,00 a R$500,00
      </label>
      <label htmlFor="price-five">
        <input type="radio" value="5" name="price" id="price-five" />
        Acima de R$500,00
      </label>
    </AsideContainer>
  )
}

export default Aside
