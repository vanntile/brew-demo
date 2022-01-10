import React from 'react'
import { Link } from 'react-router-dom'

interface Props {
  breweries: Brewery[]
}

const Header: React.FC<Props> = ({ breweries }) => (
  <header>
    <h1>
      <Link to="/">A Tale of Brew Cities</Link>
    </h1>
    <p>We know of {breweries.length} breweries</p>
  </header>
)

export default Header
