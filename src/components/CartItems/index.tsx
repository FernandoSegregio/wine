import React, { useContext } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { WineContext } from '../../context/wine';
import CardCart from '../CardCart';
import {
  CartContainer, FooterCart, HeaderCart, CloseCart,
} from './style';

function Cart() {
  const {
    openCart, setOpenCart, cartList,
  } = useContext(WineContext);

  return (
    <>
      <CloseCart onClick={() => setOpenCart(false)} type="button" hidden={!openCart} />
      <CartContainer hidden={!openCart}>
        <HeaderCart>
          <button
            type="button"
            onClick={() => setOpenCart(false)}
          >
            <BsArrowLeft />
          </button>
          <p>WineBox</p>
          <span>
            (
            {cartList.length > 0 ? cartList
              .map((item) => item.quantity).reduce((a, b) => a + b) : 0}
            )
          </span>
        </HeaderCart>
        <section>
          {cartList.length === 0 ? (
            <>
              <p>
                =(
              </p>
              <p>Você ainda não escolheu seus produtos</p>
            </>
          ) : <CardCart />}
        </section>
        <FooterCart>
          <div>
            <h3>Total</h3>
            <h1>
              R$
              {' '}
              {cartList.length > 0 ? Number(cartList
                .map((item) => item.quantity * item.priceMember)
                .reduce((a, b) => a + b)).toFixed(2) : 0}
            </h1>
          </div>
          <button type="button">Finalizar pedido</button>
        </FooterCart>
      </CartContainer>

    </>
  )
}

export default Cart;
