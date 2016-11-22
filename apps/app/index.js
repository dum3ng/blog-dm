import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import store from './store'
import routes from './routes'
import { Router, browserHistory } from 'react-router'

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Router routes={routes} history={browserHistory} />
      </Provider>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
