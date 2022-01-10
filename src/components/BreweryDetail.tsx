import React from 'react'
import { useParams, useHistory } from 'react-router-dom'

interface Props {
  breweries: Brewery[]
}

const BreweryDetail: React.FC<Props> = ({ breweries }) => {
  const id = useParams<{ id: string }>().id
  const brewery = breweries.find((e) => e.id === id)
  const history = useHistory()

  return (
    <div className="min-h-[calc(100vh-404px)] my-8 sm:my-12 flex justify-center">
      <div className="w-full px-0 py-2 sm:p-4 md:max-w-lg md:w-1/2 md:p-6">
        <div className="relative flex flex-col justify-between h-full p-8 transition duration-300 bg-white border-2 rounded-lg border-amber-800 sm:border-0 sm:transform sm:hover:shadow-xl sm:hover:scale-105">
          {brewery ? (
            <>
              <h2 className="text-3xl font-semibold text-gray-800">{brewery.name}</h2>
              <div>
                {brewery.brewery_type && (
                  <div>
                    <span className="italic font-semibold text-gray-700">Type</span>: {brewery.brewery_type}
                  </div>
                )}
                <div>
                  <span className="italic font-semibold text-gray-700">Address</span>:{' '}
                  {brewery.street && brewery.street}
                  {brewery.postal_code && <>, {brewery.postal_code}</>}
                  {brewery.city && <>, {brewery.city}</>}
                  {brewery.county_province && <>, {brewery.county_province}</>}
                  {brewery.state && <>, {brewery.state}</>}
                  {brewery.country && <>, {brewery.country}</>}
                </div>
                {brewery.phone && (
                  <div>
                    <span className="italic font-semibold text-gray-700">Phone</span>: {brewery.phone}
                  </div>
                )}
                {brewery.website_url && (
                  <div>
                    <span className="italic font-semibold text-gray-700">Website</span>:{' '}
                    <a href={brewery.website_url} target="_blank" rel="noreferrer">
                      {brewery.website_url}
                    </a>
                  </div>
                )}
              </div>
              <button
                className="px-6 py-4 mt-2 font-semibold text-gray-900 transition-colors rounded-full bg-amber-500 hover:bg-amber-400 hover:text-black"
                onClick={() => {
                  history.push('/')
                }}
              >
                Go back
              </button>
            </>
          ) : (
            <div>No such brewery</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default BreweryDetail
