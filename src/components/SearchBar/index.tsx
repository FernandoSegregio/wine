import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { VscSearch } from 'react-icons/vsc'
import { WineContext } from '../../context/wine'
import SearchContainer from './style'

function Search() {
  const [wines, setWines] = useState([])
  const [wineSearch, setWineSearch] = useState('')
  const { openSearch, setWinesFiltered } = useContext(WineContext)

  async function getWinesApi() {
    const { data } = await axios.get('https://wine-back-test.herokuapp.com/products');
    setWines(data.items);
  }

  useEffect(() => {
    getWinesApi();
  }, [])

  function handleInput(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const filterWines = wines
      .filter(({ name }) => name.normalize('NFD' as string).replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, '').toLowerCase().includes(wineSearch));
    setWinesFiltered(filterWines);
  }

  return (
    <div hidden={!openSearch}>
      <SearchContainer>
        <form onSubmit={(e) => handleInput(e)}>
          <input
            type="text"
            placeholder="Pesquisar"
            onChange={({ target }) => setWineSearch(target.value)}
            value={wineSearch}
            name="wineSearch"
          />
          <VscSearch />
        </form>
      </SearchContainer>
    </div>
  )
}

export default Search
