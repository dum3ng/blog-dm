import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'
import TabItem from './TabItem'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
  },

})

class Tab extends Component {
  constructor(props) {
    super(props)
    this.state = {
            
    }
  }
  render() {
    return (
      <div className={css(styles.container)}>
        {this.props.children}
      </div>
    )
  }
}
Tab.propTypes = {
  children: React.PropTypes.array,
  // show: React.PropTypes.bool
}
export default Tab
