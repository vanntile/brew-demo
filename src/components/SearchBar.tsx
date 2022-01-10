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
    <input
      placeholder="Find your special location"
      type="text"
      name="search"
      className="border-2 border-gray-700 border-solid rounded-md"
      value={value}
      onChange={updateHandler}
    />
  )
}

export default SearchBar
