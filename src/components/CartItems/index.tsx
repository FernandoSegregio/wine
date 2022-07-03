import React, { useContext } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { WineContext } from '../../context/wine';
import { CartContainer, HeaderCart } from './style';

function Cart() {
  const { openCart, setOpenCart } = useContext(WineContext);

  return (
    <CartContainer hidden={!openCart}>
      <HeaderCart>
        <button type="button" onClick={() => setOpenCart(false)}>
          <BsArrowLeft />
        </button>
        <p>WineBox</p>
        <span>(0)</span>
      </HeaderCart>
      <section>
        <p>
          =(
        </p>
        <p>Você ainda não escolheu seus produtos</p>
      </section>
    </CartContainer>
  )
}

export default Cart;
