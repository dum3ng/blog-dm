import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'
import {Link} from 'react-router'

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    textDecoration: 'none',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    padding: '5px 20px',
    ':hover': {
      backgroundColor: 'gray'
    }
  },
  wrap: {
    flex: 1,
  },
  image: {
    float: 'right',
    paddingRight: 20,
  },
  text: {
    textAlign: 'right',
    paddingRight: 20
  }

})

class TabBarItem extends Component {
  constructor (props) {
    super(props)
    this.state = {
      
    }
  }
  render () {
    return (
      <div className={css(styles.container)}>
        <div className={css(styles.wrap)} />
        <div className={css(styles.wrap)}>
          <img className={css(styles.image)} src={this.props.active ? this.props.activeImage : this.props.normalImage} />
        </div>
        <div className={css(styles.wrap, styles.text)}
          style={{color: this.props.active ? this.props.activeColor : this.props.normalColor}} >
          <Link to={this.props.location}>{this.props.title}</Link>
        </div>
      </div>
    )
  }
}

TabBarItem.propTypes = {
  title: React.PropTypes.string,
  active: React.PropTypes.bool,
  normalImage: React.PropTypes.string,
  activeImage: React.PropTypes.string,
  normalColor: React.PropTypes.string,
  activeColor: React.PropTypes.string,
  location: React.PropTypes.string

}
export default TabBarItem
