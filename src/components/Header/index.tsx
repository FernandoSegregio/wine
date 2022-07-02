import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import ItemsNav from '../../utils/ItemsNav';
import {
  HeaderContainer, Nav, Ul, Li, IconsHeader, LogoAndNav,
} from './style'
import logoWine from '../../../public/images/header/logo-wine.svg';
import searchIcon from '../../../public/images/header/search.svg';
import countIcon from '../../../public/images/header/count.svg';
import cartIcon from '../../../public/images/header/cart.svg';
import Search from '../SearchBar';

function Header({ setOpen }) {
  return (
    <HeaderContainer>
      <Search />
      <LogoAndNav>
        <Image
          src={logoWine}
          alt="Logo Wine"
          width={100}
          height={28}
        />
        <Nav>
          <Ul>
            { ItemsNav.map(({ name, pathName }) => (
              <Li key={name} className={pathName}>
                <Link href={`./${pathName}`}>
                  {name}
                </Link>
              </Li>
            ))}
          </Ul>
        </Nav>
      </LogoAndNav>
      <IconsHeader>
        <button type="button">
          <Image
            src={searchIcon}
            alt="Search icon"
            width={56}
            height={56}
          />
        </button>
        <button type="button">
          <Image
            src={countIcon}
            alt="Count Icon"
            width={56}
            height={56.15}
          />
        </button>
        <button
          type="button"
          onClick={() => setOpen(true)}
        >
          <Image
            src={cartIcon}
            alt="Cart Icon"
            width={56}
            height={56}
          />
        </button>
      </IconsHeader>
    </HeaderContainer>
  )
}

export default Header
