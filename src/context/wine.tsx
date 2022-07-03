import React, {
  createContext, Dispatch, SetStateAction, useMemo, useState,
} from 'react';

interface Open {
  openCart?: boolean;
  openSearch?: boolean
}

interface InterWineContext {
  openCart: Open;
  openSearch: Open;
  setOpenCart: Dispatch<SetStateAction<Open>>;
  setOpenSearch: Dispatch<SetStateAction<Open>>;
}

interface InterWineProvider {
  children: JSX.Element;
}

export const WineContext = createContext<InterWineContext>({} as InterWineContext);

export function WineProvider({ children }: InterWineProvider) {
  const [openSearch, setOpenSearch] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  const context = useMemo(() => ({
    openCart,
    openSearch,
    setOpenCart,
    setOpenSearch,
  }), [openCart, openSearch]);

  return (
    <WineContext.Provider value={context}>
      {children}
    </WineContext.Provider>
  )
}
