import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'
import {connect} from 'react-redux'
import ArticlesAction from '../actions/articles'
import {browserHistory} from 'react-router'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    padding: '50px 20px'
  }

})

class Category extends Component {
  constructor (props) {
    super(props)
    this.state = {
      
    }
    this.onChooseArticle = this.onChooseArticle.bind(this)
  }
  onChooseArticle (article) {
    browserHistory.push(`/articles/${this.props.params.category}/${article.title}`)
    this.props.chooseArticle(article)
  }
  render () {
    const category = this.props.params.category
     var content = this.props.articles.size ? (
      <div style={{flex: 1}}>
        {this.props.articles.get(category).map((article) => {
              return (<h3 style={{textDecoration: 'underline', cursor: 'pointer'}} key={article.title} onClick={() => {this.onChooseArticle(article)}} >{article.title} </h3>)
                })}
      </div>) : <div />
    return (
      <div className={css(styles.container)}>
        {content}
      </div>
    )
  }
}
Category.propTypes = {
  articles: React.PropTypes.array,
  chooseArticle: React.PropTypes.func
}
const mapProps = (state) => {
  return {
    articles: state.articles.get('articles')
  }
}

const mapDispatch = (dispatch, getState) => {
  return {
    chooseArticle: (article) => {
      dispatch(ArticlesAction.chooseArticle(article))
    }
  }   
}

export default connect(mapProps, mapDispatch)(Category)
