import React from 'react'
import { useParams, useHistory } from 'react-router-dom'

interface Props {
  breweries: Brewery[]
}

const BreweryDetail: React.FC<Props> = ({ breweries }) => {
  const id = useParams<{ id: string }>().id
  const brewery = breweries.find((e) => e.id === id)
  const history = useHistory()

  return brewery ? (
    <>
      <h2>{brewery.name}</h2>
      <div>
        <button
          onClick={() => {
            history.push('/')
          }}
        >
          Go back
        </button>
      </div>
    </>
  ) : (
    <>No such brewery</>
  )
}

export default BreweryDetail
