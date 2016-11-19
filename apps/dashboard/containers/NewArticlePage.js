import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'
import {connect} from 'react-redux'
import ArticlePage from '../components/ArticlePage'
import Articles from '../actions/articles'

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     display: 'flex',
//     flexDirection: 'column'
//   },

// })

// class NewArticlePage extends Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//       title: '',
//     }
//   }

//   render () {
//     var newArticle = {}
//     return (
//       <ArticlePage article={newArticle} onSave={(a) => { this.props.save(a) }} />
//     )
//   }
// }

// NewArticlePage.propTypes = {
//   save: React.PropTypes.func
// }

const mapProps = (state) => {
  return {
    saveState: state.articles.saveState,
    article: {}
  }
}

const mapDispatch = (dispatch, getState) => {
  return {
    onSave: (article) => {
      dispatch(Articles.save(article, true))
    }
  }
}

export default connect(mapProps, mapDispatch)(ArticlePage)
