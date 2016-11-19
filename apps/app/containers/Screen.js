import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'
import MetaBar from './MetaBar'
import Main from './Main'
import SideBar from './SideBar'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
  }
})

class Screen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tab: '',
    }
  }
  render() {
    return (
      <div className={css(styles.container)}>
        <SideBar />
        <Main />
        <MetaBar />
      </div>
    )
  }
}

export default Screen
