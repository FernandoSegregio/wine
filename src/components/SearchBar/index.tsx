import React from 'react'
import { VscSearch } from 'react-icons/vsc'
import SearchContainer from './style'

function Search() {
  return (
    <SearchContainer>
      <input type="text" placeholder="Pesquisar" />
      <VscSearch />

    </SearchContainer>
  )
}

export default Search
