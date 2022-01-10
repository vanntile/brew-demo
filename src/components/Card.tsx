import React from 'react'
import { Link } from 'react-router-dom'

interface Props {
  brewery: Brewery
}

const Card: React.FC<Props> = ({ brewery }) => (
  <>
    <div>{brewery.name}</div>
    <div>{brewery.brewery_type}</div>
    <div>{brewery.city}</div>
    <Link to={`/brewery/${brewery.id}`}>View details</Link>
  </>
)

export default Card
