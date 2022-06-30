import React from 'react'
import ItemsNav from '../../helpers/ItemsNav'
import { HeaderContainer, Nav } from './style'

function Header() {
  return (
    <HeaderContainer>
      <Nav>
        <ul>
          { ItemsNav.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </Nav>
    </HeaderContainer>
  )
}

export default Header
