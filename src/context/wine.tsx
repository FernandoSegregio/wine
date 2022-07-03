import React, {
  createContext, Dispatch, SetStateAction, useMemo, useState,
} from 'react';

interface InterWineContext {
  openCart: boolean;
  openSearch: boolean;
  setOpenCart: Dispatch<SetStateAction<boolean>>;
  setOpenSearch: Dispatch<SetStateAction<boolean>>;
}

interface InterWineProvider {
  children: React.ReactNode;
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
