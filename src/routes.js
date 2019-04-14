import React from 'react'
import { Route, HashRouter, Switch } from 'react-router-dom'
import Products from './components/Products'
import User from './components/User'
import Markets from './components/Markets'
import ScrollToTop from './components/ScrollTop'

export default props => (
    <HashRouter>
      <ScrollToTop>
        <Switch>
          <Route exact path='/' component={ Markets } />
          <Route exact path='/products' component={ Products } />
          <Route exact path='/user' component={ User } />
        </Switch>
      </ScrollToTop>
    </HashRouter>
  )