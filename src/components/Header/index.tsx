import React from 'react'
import Image from 'next/image';
import ItemsNav from '../../helpers/ItemsNav';
import {
  HeaderContainer, Nav, Ul, Li,
} from './style'
import logoWine from '../../../public/images/header/logo-wine.svg';

function Header() {
  return (
    <HeaderContainer>
      <Image
        src={logoWine}
        alt="Logo Wine"
        width={100}
        height={28}
      />
      <Nav>
        <Ul>
          { ItemsNav.map((item) => (
            <Li key={item}>{item}</Li>
          ))}
        </Ul>
      </Nav>
    </HeaderContainer>
  )
}

export default Header
