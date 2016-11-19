import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    cursor: 'pointer',
    color: 'white'
  },

})

class SideBarItem extends Component {
  constructor (props) {
    super(props)
    this.state = {
      
    }
  }
  render () {
    return (
      <div className={css(styles.container)} onClick={this.props.onClick}>
        <span style={{color: this.props.active ? 'red' : 'white'}}>{this.props.title}</span>
        <hr />
      </div>
    )
  }
}

SideBarItem.propTypes = {
  active: React.PropTypes.bool,
  title: React.PropTypes.string,
  onClick: React.PropTypes.func
}

export default SideBarItem
