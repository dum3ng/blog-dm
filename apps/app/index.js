import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {StyleSheet, css} from 'aphrodite'
import {Provider} from 'react-redux'

import store from './store'
import Screen from './containers/Screen'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    // flexDirection: 'row',
  }
})
console.log('store')
console.log(store)

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <div className={css(styles.container)}>
          <Screen />
        </div>
      </Provider>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
