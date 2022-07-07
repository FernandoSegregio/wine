import React from 'react';
import { AsideContainer, BorderInput } from './style';

function Aside() {
  return (
    <AsideContainer>
      <h1>Refine sua busca</h1>
      <p>Por preço</p>
      <div>
        <BorderInput htmlFor="price-one">
          <span>Até R$40</span>
          <label htmlFor="price-one" />
          <input type="radio" value="1" name="price" id="price-one" />
        </BorderInput>

        <BorderInput htmlFor="price-two">
          <span>R$40 a R$60</span>
          <label htmlFor="price-two" />
          <input type="radio" value="2" name="price" id="price-two" />
        </BorderInput>

        <BorderInput htmlFor="price-three">
          <span>R$60 a R$100</span>
          <label htmlFor="price-three" />
          <input type="radio" value="3" name="price" id="price-three" />
        </BorderInput>

        <BorderInput htmlFor="price-four">
          <span>R$100 a R$200</span>
          <label htmlFor="price-four" />
          <input type="radio" value="4" name="price" id="price-four" />
        </BorderInput>

        <BorderInput htmlFor="price-five">
          <span>R$200 a R$500</span>
          <label htmlFor="price-five" />
          <input type="radio" value="5" name="price" id="price-five" />
        </BorderInput>

        <BorderInput htmlFor="price-six">
          <span>Acima De R$500</span>
          <label htmlFor="price-six" />
          <input type="radio" value="6" name="price" id="price-six" />
        </BorderInput>
      </div>

    </AsideContainer>
  )
}

export default Aside
