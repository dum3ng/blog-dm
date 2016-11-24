import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    height: 50,
    lineHeight: '30px',
    padding: '10px',
    textAlign: 'center',
    justifyContent: 'center',
    marginRight: 1,
    cursor: 'pointer'
  }

})

export default React.createClass({
  render () {
    return (
      <div className={css(styles.container)} style={this.props.style} onClick={this.props.onClick}>
        {this.props.title}
      </div>
    ) 
  }  
})
