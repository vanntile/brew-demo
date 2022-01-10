import React from 'react'

interface Props {
  value: string
  set: React.Dispatch<React.SetStateAction<string>>
}

const SearchBar: React.FC<Props> = ({ value, set }) => {
  const updateHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault()
    set(e.target.value)
  }

  return (
    <div className="flex items-center justify-center">
      <div
        className={`flex items-center w-full max-w-5xl px-6 py-4 space-x-6 transition duration-500 bg-white border-2
      border-amber-800 border-solid sm:border-0 sm:transform sm:w-3/4 rounded-xl sm:hover:shadow-xl sm:hover:scale-105`}
      >
        <div className="relative flex w-full bg-gray-100 rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-0 w-6 h-6 m-4 opacity-30"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>

          <input
            placeholder="Find your special location"
            type="text"
            name="search"
            className="w-full py-4 pl-16 pr-4 bg-gray-100 rounded-lg outline-none ring-0 focus:ring-4 ring-blue-400"
            value={value}
            onChange={updateHandler}
          />
        </div>
      </div>
    </div>
  )
}

export default SearchBar
