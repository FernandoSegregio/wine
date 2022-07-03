import React, { useContext } from 'react'
import { VscSearch } from 'react-icons/vsc'
import { WineContext } from '../../context/wine'
import SearchContainer from './style'

function Search() {
  const { openSearch } = useContext(WineContext)

  return (
    <div hidden={!openSearch}>
      <SearchContainer>
        <input type="text" placeholder="Pesquisar" />
        <VscSearch />
      </SearchContainer>
    </div>
  )
}

export default Search
