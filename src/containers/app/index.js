import React from 'react'
import { Route } from 'react-router-dom'
import HomePage from '../HomePage'
import PokemonDetail from './../../components/PokemonDetail';
import Header from './../../components/Header';

const App = () => (
  <div>
    <Header />
    <main>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/pokemon/:name" component={PokemonDetail} />
    </main>
  </div>
)

export default App
