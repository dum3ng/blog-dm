import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

const styles = StyleSheet.create({
  tContainer: {
    flex: 1,
    display: 'flex',
  }

})

class TabItem extends Component {
  constructor (props) {
    super(props)
    this.state = {
      
    }
  }
  render () {
    return (
      <div className={css(styles.tContainer)} style={{display: this.props.show?'block':'none'}}>
        {this.props.content}
      </div>
    )
  }
}
TabItem.propTypes = {
  content: React.PropTypes.element,
  show: React.PropTypes.bool
}
export default TabItem
