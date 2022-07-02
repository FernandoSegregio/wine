import React from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { CartContainer, HeaderCart } from './style';

function Cart({ open, setOpen }) {
  return (
    <CartContainer hidden={open}>
    </CartContainer>
  )
}

export default Cart;
