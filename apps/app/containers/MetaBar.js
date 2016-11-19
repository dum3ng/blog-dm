import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'


const styles = StyleSheet.create({
  container: {
    width: 200,
    backgroundColor: '#333',
    color: 'white',
  }
})
class MetaBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tab: '',
    }
  }
  render() {
    return (
      <div className={css(styles.container)}>
        I am meta bar.
      </div>
    )
  }
}

export default MetaBar
