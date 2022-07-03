import React, { useContext } from 'react'
import { WineContext } from '../../context/wine'
import { WineProps } from '../../interfaces'
import Card from '../CardWine'
import { GridContainer, ViewMore } from './style'

function Grid({ winesApi }: WineProps) {
  const { setQuantity, quantity, winesFiltered } = useContext(WineContext)
  return (
    <>
      <GridContainer>
        <Card winesApi={winesApi} />
      </GridContainer>
      { winesFiltered.length > 0 && (
      <ViewMore
        type="button"
        onClick={() => setQuantity(quantity + 12)}
      >
        Ver mais
      </ViewMore>
      )}
    </>
  )
}

export default Grid
