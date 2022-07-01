import React from 'react'
import { WineProps } from '../../interfaces'
import Card from '../CardWine'
import GridContainer from './style'

function Grid({ wines }: WineProps) {
  return (
    <GridContainer>
      <Card wines={wines} />
    </GridContainer>
  )
}

export default Grid
