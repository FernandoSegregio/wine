import React from 'react'
import ItemsNav from '../../helpers/ItemsNav'
import {
  HeaderContainer, Nav, Ul, Li,
} from './style'

function Header() {
  return (
    <HeaderContainer>
      <Nav>
        <Ul>
          { ItemsNav.map((item) => (
            <Li>{item}</Li>
          ))}
        </Ul>
      </Nav>
    </HeaderContainer>
  )
}

export default Header
