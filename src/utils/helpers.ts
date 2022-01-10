export const filterBreweries =
  (searchTerm: string) =>
  (e: Brewery): boolean => {
    const { name, street, address_2, address_3, city, state, country } = e
    const searchString = [name, street, address_2, address_3, city, state, country].filter(Boolean).join(' ')

    return searchString.toLowerCase().includes(searchTerm.toLowerCase())
  }

export default { filterBreweries }
