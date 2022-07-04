import cookie from 'cookie'
import { IncomingMessage } from 'http'
import { Dispatch, SetStateAction } from 'react';
import { ApiItems } from '../interfaces';

export function parseCookies(req: IncomingMessage | undefined) {
  return cookie.parse(req ? req.headers.cookie || '' : document.cookie)
}

export function addLocalStorage(cartList: ApiItems[]) {
  localStorage.setItem('cart', JSON.stringify(cartList));
}

export function restoreCartList(setCartList: Dispatch<SetStateAction<ApiItems[]>>) {
  const actualCart = JSON.parse(localStorage.getItem('cart') as string);
  if (actualCart !== null) {
    setCartList(actualCart);
  }
}
