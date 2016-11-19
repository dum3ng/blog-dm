import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {StyleSheet, css} from 'aphrodite'
import Screen from './containers/Screen'
import store from './store'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex'
  }
})

class Dashboard extends React.Component{
  constructor(props) {
    super(props);
  
    this.state = {};
  }
  render(){
    return (
      <Provider store = {store} >
        <div className={css(styles.container)}>
          <Screen />
        </div>
      </Provider>)
  }
}

ReactDOM.render(<Dashboard/>, document.getElementById('app'))