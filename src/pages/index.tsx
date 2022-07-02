import { useEffect } from 'react';
import Router from 'next/router';

export default function Comp() {
  useEffect(() => {
    const { pathname } = Router;
    if (pathname === '/') {
      Router.push('/loja-vinhos');
    }
  });
}
