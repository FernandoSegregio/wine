import React, {
  createContext, Dispatch, SetStateAction, useMemo, useState,
} from 'react';

interface Open {
  [x: string]: any;
  openCart?: boolean;
  openSearch?: boolean;
  wines: [];
}

interface InterWineContext {
  openCart: Open;
  openSearch: Open;
  wines: Open;
  setOpenCart: Dispatch<SetStateAction<Open>>;
  setOpenSearch: Dispatch<SetStateAction<Open>>;
  setWines: Dispatch<SetStateAction<Open>>;
}

interface InterWineProvider {
  children: JSX.Element;
}

export const WineContext = createContext<InterWineContext>({} as InterWineContext);

export function WineProvider({ children }: InterWineProvider) {
  const [openSearch, setOpenSearch] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [wines, setWines] = useState([])

  const context = useMemo(() => ({
    wines,
    openCart,
    openSearch,
    setOpenCart,
    setOpenSearch,
    setWines,
  }), [openCart, openSearch, wines]);

  return (
    <WineContext.Provider value={context}>
      {children}
    </WineContext.Provider>
  )
}
