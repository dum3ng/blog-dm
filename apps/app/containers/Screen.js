import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'
import MetaBar from './MetaBar'
import SideBar from './SideBar'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row'
  },
  main: {
    overflow: 'auto',
    display: 'flex',
    flex: 1
  }
})

class Screen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tab: ''
    }
  }
  componentDidMount() {
    console.log('screen mount.')
  }
  render () {
    return (
      <div className={css(styles.container)}>
        <SideBar />
        <div className={css(styles.main)}>
          {this.props.children}
        </div>
        <MetaBar />
      </div>
    )
  }
}
Screen.propTypes = {
  children: React.PropTypes.any
}

export default Screen
