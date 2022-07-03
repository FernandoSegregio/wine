import React from 'react'
import { WineProps } from '../../interfaces'
import Card from '../CardWine'
import GridContainer from './style'

function Grid({ winesApi }: WineProps) {
  return (
    <GridContainer>
      <Card winesApi={winesApi} />
    </GridContainer>
  )
}

export default Grid
