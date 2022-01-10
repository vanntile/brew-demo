import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import BreweryList from './components/BrewerieList'
import BreweryDetail from './components/BreweryDetail'
import Footer from './components/Footer'
import Header from './components/Header'
import Notification from './components/Notification'
import SearchBar from './components/SearchBar'
import useNotification from './hooks/useNotification'
import { filterBreweries } from './utils/helpers'

const App: React.FC = () => {
  const [filter, setFilter] = useState('')
  const [breweries, setBreweries] = useState<Brewery[]>([])
  const [notification, notify] = useNotification()

  useEffect(() => {
    const getBreweryData = async () => {
      try {
        const response = await fetch('https://api.openbrewerydb.org/breweries')
        if (response.status !== 200) throw new Error(`Error. Status: ${response.status}`)
        const data = (await response.json()) as Brewery[]

        setBreweries(data)
      } catch (err) {
        console.error(err)
        notify({ type: 'error', message: `Could not get breweries' information` }, 12)
      }
    }

    getBreweryData() // eslint-disable-line @typescript-eslint/no-floating-promises
  }, [])

  return (
    <div className="min-w-full min-h-screen px-4 pt-8 pros bg-gradient-to-r from-amber-500 to-yellow-500 md:px-8 prose-slate">
      <Router>
        <Header breweries={breweries} />
        <main>
          <Notification notification={notification} />
          <Switch>
            <Route path="/brewery/:id">
              <BreweryDetail breweries={breweries} />
            </Route>
            <Route path="/">
              <SearchBar value={filter} set={setFilter} />
              <BreweryList breweries={breweries.filter(filterBreweries(filter))} />
            </Route>
          </Switch>
        </main>
        <Footer />
      </Router>
    </div>
  )
}

export default App
