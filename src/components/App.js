import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Layout from './Layout'
import Home from '../views/Home'
import About from '../views/About'
import Dashboard from '../views/Dashboard'

import './styles/App.css';

export default function App(){
  return(
    <div className="App">
      <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/dashboard" component={Dashboard} />

        </Switch>
      </Layout>
    </BrowserRouter>
    </div>
  )
}