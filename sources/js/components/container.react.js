// Library
import React from 'react'
import { Router, IndexRoute, Route, Link, browserHistory } from 'react-router'

import App from '../components/app.react'
import Home from '../components/home.react'
import Login from '../components/auth/login.react'
import Me from '../components/users/edit.react'

// Alt - Flux
import UserStore from '../stores/user'

class Container extends React.Component {

  requireAuth(nextState, replace) {
    if (!UserStore.getState().loggedIn) {
      replace({
        pathname: '/login',
        state: { nextPathname: nextState.location.pathname }
      })
    }
  }

  render() {

    return (

      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/me" component={Me} onEnter={this.requireAuth.bind(this)} />
        </Route>
      </Router>

    )
  }

}

export default Container