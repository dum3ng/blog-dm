import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    color: 'white',
    minHeight: 100,
  },
  space: {
    flex: 1,
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    textAlign: 'center',
  }
})

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tab: '',
    }
  }
  render() {
    return (
      <div className={css(styles.container)}>
        <div className={css(styles.space)}></div>
        <div className={css(styles.wrapper)}>
          <img className={css(styles.image)}  src={this.props.imageSource}/>
          <p className={css(styles.name)}>{this.props.name}</p>
        </div>
        <div className={css(styles.space)}></div>
      </div>
    )
  }
}

export default Profile
