import React from 'react'
import { Link } from 'react-router-dom'

interface Props {
  breweries: Brewery[]
}

const Header: React.FC<Props> = ({ breweries }) => (
  <header className="pt-4 pb-12 text-center text-gray-800">
    <Link to="/">
      <h1 className="text-3xl font-extrabold sm:text-5xl">A Tale of Brew Cities</h1>
    </Link>
    <p className="pt-4 text-xl">We know of {breweries.length} breweries</p>
  </header>
)

export default Header
