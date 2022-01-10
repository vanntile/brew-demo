import React from 'react'
import Card from './Card'

interface Props {
  breweries: Brewery[]
}

const BreweryList: React.FC<Props> = ({ breweries }) => {
  return (
    <div className="min-h-[calc(100vh-444px)]">
      <div className="flex flex-wrap items-stretch justify-center my-8 sm:my-12 sm:-mx-4">
        {breweries.map((e) => (
          <Card key={e.id} brewery={e} />
        ))}
      </div>
    </div>
  )
}

export default BreweryList
