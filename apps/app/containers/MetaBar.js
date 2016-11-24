import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'


const styles = StyleSheet.create({
  container: {
    // width: 200,
    backgroundColor: '#333',
    color: 'white',
    flex: 0.8,
    backgroundImage: 'url("/img/meta.jpg")',
    '@media (max-width: 768px)': {
      display: 'none'
    }
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
        
      </div>
    )
  }
}

export default MetaBar
