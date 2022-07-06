import React, {
  createContext, Dispatch, SetStateAction, useMemo, useState,
} from 'react';
import { ApiItems, CartItems } from '../interfaces';

interface InterWineContext {
  quantityRender: number;
  winesFiltered: ApiItems[];
  openCart: boolean;
  openSearch: boolean;
  cartList: CartItems[];
  setCartList: Dispatch<SetStateAction<CartItems[]>>;
  setQuantityRender: Dispatch<SetStateAction<number>>;
  setOpenCart: Dispatch<SetStateAction<boolean>>;
  setOpenSearch: Dispatch<SetStateAction<boolean>>;
  setWinesFiltered: Dispatch<SetStateAction<ApiItems[]>>
}

interface InterWineProvider {
  children: React.ReactNode;
}

export const WineContext = createContext<InterWineContext>({} as InterWineContext);

export function WineProvider({ children }: InterWineProvider) {
  const [openSearch, setOpenSearch] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [winesFiltered, setWinesFiltered] = useState([] as ApiItems[]);
  const [quantityRender, setQuantityRender] = useState(12);
  const [cartList, setCartList] = useState([] as CartItems[]);

  const context = useMemo(() => ({
    quantityRender,
    winesFiltered,
    openCart,
    openSearch,
    cartList,
    setCartList,
    setOpenCart,
    setOpenSearch,
    setWinesFiltered,
    setQuantityRender,
  }), [openCart, openSearch, winesFiltered, quantityRender, cartList]);

  return (
    <WineContext.Provider value={context}>
      {children}
    </WineContext.Provider>
  )
}
