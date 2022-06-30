import React from 'react'
import Image from 'next/image';
import ItemsNav from '../../helpers/ItemsNav';
import {
  HeaderContainer, Nav, Ul, Li,
} from './style'
import logoWine from '../../../public/images/header/logo-wine.svg';
import searchIcon from '../../../public/images/header/search.svg';

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
      <Image
        src={searchIcon}
        alt="Search icon"
        width={56}
        height={56}
      />
    </HeaderContainer>
  )
}

export default Header
