import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'
import {connect} from 'react-redux'
import NewArticlePage from './NewArticlePage'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    border: '1px solid gray'
  },
  tab: {
    flex: 1
  }
})

class Main extends Component {
  constructor (props) {
    super(props)
    this.state = {
      
    }
    this.shouldDisplay = this.shouldDisplay.bind(this)
  }
  shouldDisplay (me) {
    if (this.props.tab === me) return 'block'
    return 'none'
  }
  render () {
    // let content 
    // switch (this.props.tab) {
    //   case 'new':
    //     content = <NewArticlePage />
    //     break
    //   case 'articles':
    //     content = <p>all articles..</p>
    //     break
    //   case 'settings':
    //     content = <p>settings </p>
    //     break
    //   case 'home':
    //   default:
    //     content = <h1>home</h1>
    // }
    // let display = ((t) => {
    //   switch (t) {
    //     case 'new':
    //   }
    // })(this.props.tab)
    return (
      <div className={css(styles.container)}>
        <div className={css(styles.tab)} style={{display: this.shouldDisplay('new')}}>
          <NewArticlePage />
        </div>
        <div className={css(styles.tab)} style={{display: this.shouldDisplay('articles')}}> all articles</div>
        <div className={css(styles.tab)} style={{display: this.shouldDisplay('settings')}}> settings</div>
        <div className={css(styles.tab)} style={{display: this.shouldDisplay('home')}}> home</div>
      </div>
    )
  }
}

const mapProps = (state) => {
  return {
    tab: state.tab,
  }
}

export default connect(mapProps)(Main)
