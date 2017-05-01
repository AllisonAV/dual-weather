'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'

import AppContainer from './containers/AppContainer'

import Jokes from './components/Jokes'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'
import NotFound from './components/NotFound'

import WeatherContainer from './containers/WeatherContainer'
import MapGoogleContainer from './containers/MapGoogleContainer'
import WeatherLocationContainer from './containers/WeatherLocationContainer'

const ExampleApp = connect(
  ({ auth }) => ({ user: auth })
)(
  ({ user, children }) =>
    <div>
      <nav>
        {user ? <WhoAmI/> : <Login/>}
      </nav>
      {children}
    </div>
)

const onWeatherLocationEnter = (nextRouterState) => {
  store.getState()
}

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={AppContainer}>
        <IndexRedirect to="/weather" />
        <Route path="/jokes" component={Jokes} />
        <Route path="/weather" component={WeatherContainer} />
        <Route path="/weather/:location1/:location2"
                component={WeatherLocationContainer}
                onEnter={onWeatherLocationEnter} />
        <Route path="/map" component={MapGoogleContainer} />
      </Route>
      <Route path='*' component={NotFound} />
    </Router>
  </Provider>,
  document.getElementById('main')
)
