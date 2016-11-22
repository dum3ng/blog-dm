/* global fetch */
import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'
import Spinner from '../components/Spinner'
import ArticlesAction from '../actions/articles'
import CategoryAction from '../actions/category'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    padding: '10px 50px',
    marginTop: 50
  },
  categoryWrapper: {
    marginBottom: 20
  },
  category: {
    marginLeft: 20
  },
  article: {
    marginLeft: 50,
    cursor: 'pointer',
    textDecoration: 'underline',
    listStyleType: 'circle'
  }

})

const Item = (props) =>{
  const article = props.article
  return (
    <li onClick={props.onClick} className={css(styles.article)} >
        {article.title}
    </li>)
}

class Articles extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
    this.onChooseArticle = this.onChooseArticle.bind(this)
    this.onChooseCategory = this.onChooseCategory.bind(this)
  }
  componentDidMount () {
    if (!this.props.articles.size) {
      this.props.fetchArticles()
    }
  }

  onChooseArticle (art) {
    browserHistory.push(`/articles/${art.title}`)
    this.props.chooseArticle(art)
  }

  onChooseCategory (cat) {
    browserHistory.push(`/articles/${cat}`)
    this.props.chooseCategory(cat)
  }

  render () {
    var content = this.props.articles.size ? (
      <div>
        {this.props.articles.keySeq().map(cat => {
          return <span onClick={() => { this.onChooseCategory(cat) }}>{cat}</span>
        })}
        {this.props.children}
      </div>) : <div />
    content = this.props.fetching ? <Spinner /> : content
    return (
      <div className={css(styles.container)}>
        {content}
      </div>
    )
  }
}
Articles.propTypes = {
  articles: React.PropTypes.object,
  fetching: React.PropTypes.bool
}
const mapProps = (state) => {
  return {
    articles: state.articles.get('articles'),
    fetching: state.articles.get('articlesFetching')
  }
}

const mapDispatch = (dispatch, getState) => {
  return {
    chooseArticle: (article) => {
      dispatch(ArticlesAction.chooseArticle(article))
    },
    fetchArticles: () => {
      dispatch(ArticlesAction.fetchArticles())
    },
    chooseCategory: (category) => {
      dispatch(CategoryAction.chooseCategory(category))
    }
  }   
}

export default connect(mapProps, mapDispatch)(Articles)
