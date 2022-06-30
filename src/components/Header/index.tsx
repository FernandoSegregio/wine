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
            <Li key={item}>{item}</Li>
          ))}
        </Ul>
      </Nav>
    </HeaderContainer>
  )
}

export default Header
