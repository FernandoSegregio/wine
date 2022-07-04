import Image from 'next/image';
import React, { useContext } from 'react';
import { nanoid } from 'nanoid';
import { WineContext } from '../../context/wine';
import CartCardContainer from './style';

function CardCart() {
  const { cartList, setCartList } = useContext(WineContext);

  function incrementItem(e: { currentTarget: { value: string } }) {
    const { value } = e.currentTarget;
    const item = cartList.filter((wine) => wine.id === Number(value));
    console.log(item);
    setCartList([...cartList, ...item]);
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
                    // onClick={() => decrementItem()}
                  >
                    -
                  </button>
                  <span>1</span>
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
                  {(item.priceMember).toString().split('.')[0]}
                  ,
                  <span>{(item.priceMember).toFixed(2).toString().split('.')[1]}</span>
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
