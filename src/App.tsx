import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import BreweryList from './components/BrewerieList'
import BreweryDetail from './components/BreweryDetail'
import Footer from './components/Footer'
import Notification from './components/Notification'
import useNotification from './hooks/useNotification'

const App: React.FC = () => {
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
    <div className="p-8 prose prose-slate">
      <Router>
        <header>
          <h1>
            <Link to="/">A Tale of Brew Cities</Link>
          </h1>
          <p>We know of {breweries.length} breweries</p>
        </header>
        <nav></nav>
        <main>
          <Notification notification={notification} />
          <Switch>
            <Route path="/brewery/:id">
              <BreweryDetail breweries={breweries} />
            </Route>
            <Route path="/">
              <BreweryList breweries={breweries} />
            </Route>
          </Switch>
        </main>
        <Footer />
      </Router>
    </div>
  )
}

export default App
