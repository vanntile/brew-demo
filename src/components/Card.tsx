import React from 'react'
import { Link } from 'react-router-dom'

interface Props {
  brewery: Brewery
}

type Choice = <T>(arg: T[]) => T

const gradientList = ['from-blue-600  to-blue-900', 'from-fuchsia-600  to-fuchsia-900']
const choice: Choice = (l) => l[Math.floor(Math.random() * l.length)]

const Card: React.FC<Props> = ({ brewery }) => (
  <div className="w-full px-0 py-2 sm:p-4 md:max-w-lg md:w-1/2 md:p-6">
    <div className="relative flex flex-col justify-between h-full p-8 text-center transition duration-300 bg-white border-2 rounded-lg border-amber-800 sm:border-0 sm:transform sm:hover:shadow-xl sm:hover:scale-105">
      <div className="text-xl font-semibold text-gray-800">{brewery.name}</div>
      <div className="flex justify-between py-6 flex-nowrap">
        <div className={`text-white rounded-full px-4 py-1 bg-gradient-to-r ${choice<string>(gradientList)}`}>
          {brewery.brewery_type}
        </div>
        <div>City: {brewery.city}</div>
      </div>
      <Link
        className="px-6 py-4 mt-2 font-semibold text-gray-100 transition-colors rounded-full bg-amber-500 hover:bg-amber-600 hover:text-white"
        to={`/brewery/${brewery.id}`}
      >
        View details
      </Link>
    </div>
  </div>
)

export default Card
