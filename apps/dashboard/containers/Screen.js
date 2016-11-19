import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'
import SideBar from './SideBar'
import Main from './Main'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
  },

})

class Screen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }
  render() {
    return (
      <div className={css(styles.container)}>
        <SideBar />
        <Main />
      </div>
    )
  }
}

export default Screen
