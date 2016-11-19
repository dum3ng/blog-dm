import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'
import {connect} from 'react-redux'
import TAB from '../actions/tab'
import SideBarItem from '../components/SideBarItem'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: 250,
    backgroundColor: '#333',
    color: 'white'
  },
  space: {
    flex: 1
  }

})

class SideBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      
    }
  }
  render () {
    return (
      <div className={css(styles.container)}>
        <div className={css(styles.space)} />
        <SideBarItem active={this.props.tab === 'new'} title='New Article' onClick={this.props.onNew}/>
        <SideBarItem active={this.props.tab === 'articles'} title='Articles' onClick={this.props.onArticles} />
        <SideBarItem active={this.props.tab === 'settings'} title='Settings' onClick={this.props.onSettings} />
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

const mapDispatch = (dispatch) => {
  return {
    onNew: () => { dispatch(TAB.gotoTab('new')) },
    onArticles: () => { dispatch(TAB.gotoTab('articles')) },
    onSettings: () => { dispatch(TAB.gotoTab('settings')) }
  }
}

export default connect(mapProps, mapDispatch)(SideBar)
