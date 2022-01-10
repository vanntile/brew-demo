import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import BreweryList from './components/BrewerieList'
import BreweryDetail from './components/BreweryDetail'
import Footer from './components/Footer'
import data from './utils/data.json'

const App: React.FC = () => {
  const breweries: Brewery[] = data as unknown as Brewery[]
  return (
    <Router>
      <div className="p-8 prose prose-slate">
        <header>
          <h1>
            <Link to="/">A Tale of Brew Cities</Link>
          </h1>
          <p>We know of {breweries.length} breweries</p>
        </header>
        <nav></nav>
        <main>
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
      </div>
    </Router>
  )
}

export default App
