import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'
import {connect} from 'react-redux'

import TAB from '../actions/tab'
import Profile from '../components/Profile'
import SideBarItems from './SideBarItems'

const image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Indian_Cat_pic.jpg/220px-Indian_Cat_pic.jpg'
const styles = StyleSheet.create({
  sidebar: {
    width: 250,
    backgroundColor: '#333',
    display: 'flex',
    flexDirection: 'column',
  },
  space: {
    flex:1,
  }
})

class SideBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tab: '',
    }
  }
  render () {
    return (
      <div className={css(styles.sidebar)}>
        <div className={css(styles.space)} />
        <Profile imageSource={image} name='Du Meng' />
        <div className={css(styles.space)} />
        <SideBarItems />
        <div className={css(styles.space)} />
      </div>
    )
  }
}

const mapProps = (state) => {
  return {
    tab: state.tab
  }
}
// const mapDispatch = (dispatch) => {
//   return {
//     gotoHome: () => dispatch(TAB.actions.gotoTab('home')),
//     gotoArticles: () => dispatch(TAB.actions.gotoTab('articles')),
//     gotoAbout: () => dispatch(TAB.actions.gotoTab('about')),
//   }
// }

export default connect(mapProps)(SideBar)
