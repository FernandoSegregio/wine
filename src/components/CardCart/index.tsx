/* eslint-disable no-multi-assign */
import Image from 'next/image';
import React, { useContext } from 'react';
import { nanoid } from 'nanoid';
import { WineContext } from '../../context/wine';
import CartCardContainer from './style';
import { addLocalStorage } from '../../helpers';

function CardCart() {
  const { cartList, setCartList } = useContext(WineContext);

  function incrementItem(e: React.MouseEvent<HTMLButtonElement>) {
    const { value } = e.currentTarget;

    const itemIndex = cartList.findIndex((i) => i.id === Number(value));
    const newCart = [...cartList];
    newCart[itemIndex].quantity = newCart[itemIndex].quantity += 1;

    setCartList(newCart);
    addLocalStorage(newCart);
  }

  function decrementItem(e: React.MouseEvent<HTMLButtonElement>) {
    const { value } = e.currentTarget;

    const itemIndex = cartList.findIndex((i) => i.id === Number(value));
    const newCart = [...cartList];
    newCart[itemIndex].quantity = newCart[itemIndex].quantity -= 1;
    setCartList(newCart);
    addLocalStorage(newCart);
  }

  return (
    <div>
      {cartList.length > 0 && (
        cartList.map((item) => (
          <CartCardContainer key={nanoid()}>
            <Image
              src={item.image}
              alt={item.name}
              width={72}
              height={110}
            />
            <div>
              <h1>{item.name}</h1>
              <div>
                <div>
                  <button
                    value={item.id}
                    type="button"
                    onClick={(e) => decrementItem(e)}
                    disabled={item.quantity === 1}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    value={item.id}
                    type="button"
                    onClick={(e) => incrementItem(e)}
                  >
                    +
                  </button>
                </div>
                <p>
                  <span>R$</span>
                  {Number((item.priceMember).toString().split('.')[0]) * item.quantity}
                  ,
                  <span>{Number(item.priceMember).toFixed(2).toString().split('.')[1]}</span>
                </p>
              </div>
            </div>
          </CartCardContainer>
        ))
      )}
    </div>
  )
}

export default CardCart
