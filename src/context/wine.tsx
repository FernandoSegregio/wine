import React, {
  createContext, Dispatch, SetStateAction, useMemo, useState,
} from 'react';
import { ApiItems } from '../interfaces';

interface InterWineContext {
  winesFiltered: ApiItems[];
  openCart: boolean;
  openSearch: boolean;
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

  const context = useMemo(() => ({
    winesFiltered,
    openCart,
    openSearch,
    setOpenCart,
    setOpenSearch,
    setWinesFiltered,
  }), [openCart, openSearch, winesFiltered]);

  return (
    <WineContext.Provider value={context}>
      {children}
    </WineContext.Provider>
  )
}
