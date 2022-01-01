import React from 'react'
import { Route, Switch } from 'react-router-dom'

// pages
import { Main, Todo, Transactions } from './pages'

function Router() {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/todo" component={Todo} />
      <Route exact path="/transactions" component={Transactions} />
    </Switch>
  )
}

export default Router
