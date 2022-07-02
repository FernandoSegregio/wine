import React from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { CartContainer, HeaderCart } from './style';

function Cart({ open, setOpen }) {
  return (
    <CartContainer hidden={!open}>
      <HeaderCart>
        <button type="button" onClick={() => setOpen(false)}>
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
