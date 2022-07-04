import React, { useContext } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { WineContext } from '../../context/wine';
import CardCart from '../CardCart';
import { CartContainer, HeaderCart } from './style';

function Cart() {
  const { openCart, setOpenCart, cartList } = useContext(WineContext);

  return (
    <CartContainer hidden={!openCart}>
      <HeaderCart>
        <button type="button" onClick={() => setOpenCart(false)}>
          <BsArrowLeft />
        </button>
        <p>WineBox</p>
        <span>
          (
          {cartList.length}
          )
        </span>
      </HeaderCart>
      <section>
        { cartList.length === 0 ? (
          <>
            <p>
              =(
            </p>
            <p>Você ainda não escolheu seus produtos</p>
          </>
        ) : <CardCart />}
      </section>
    </CartContainer>
  )
}

export default Cart;
