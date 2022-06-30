import React from 'react'
import ItemsNav from '../../helpers/ItemsNav'
import {
  HeaderContainer, Nav, Ul,
} from './style'

function Header() {
  return (
    <HeaderContainer>
      <Nav>
        <Ul>
          { ItemsNav.map((item) => (
            <li>{item}</li>
          ))}
        </Ul>
      </Nav>
    </HeaderContainer>
  )
}

export default Header
