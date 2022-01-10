import React from 'react'
import Card from './Card'

interface Props {
  breweries: Brewery[]
}

const BreweryList: React.FC<Props> = ({ breweries }) => {
  return (
    <>
      {breweries.map((e) => (
        <Card key={e.id} brewery={e} />
      ))}
    </>
  )
}

export default BreweryList
