/* global fetch */
import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import {connect} from 'react-redux'
import Spinner from '../components/Spinner'
import Article from '../components/Article'
import Detail from '../components/Detail'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    padding: '10px 50px',
    marginTop: 50
  },
  categoryWrapper:{
    marginBottom: 20,
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

class Articles extends Component {
  constructor (props) {
    super(props)
    this.state = {
      articles: {},
      fetching: false,
      isDetail: false,
      articleChosen: {}
    }
    this.fetchArticles = this.fetchArticles.bind(this)
    this.onBack = this.onBack.bind(this)
    this.display = this.display.bind(this)
  }
  componentDidMount () {
    this.fetchArticles()
  }
  fetchArticles () {
    this.setState({fetching: true}, () => {
      fetch('/api/articles')
      .then((response) => {
        return response.json()
      })
      .then((articles) => {
        console.log(Object.keys(articles))
        this.setState({articles: articles, fetching: false})
      })
    })
  }
  onChooseArticle (art) {
    this.setState({isDetail: true, articleChosen: art})
  }
  onBack () {
    this.setState({isDetail: false})
  }
  display (yes) {
    let dis = yes ? this.state.isDetail : !this.state.isDetail
    return dis ? 'block' : 'none'
  }
  render () {
    var content = (
      <div style={{flex: 1}}>
        {Object.keys(this.state.articles).map((cat) => {
          return (
            <div className={css(styles.categoryWrapper)}>
              <div className={css(styles.category)}><h2>{cat}</h2></div>
              { this.state.articles[cat].map((art) => {
                 return <li key={art.title} className={css(styles.article)} 
                          onClick={ this.onChooseArticle.bind(this, art) }>{art.title}</li>
              }) }
            </div>
          )
        })}
      </div>)
    content = this.state.fetching ? <Spinner /> : content
    // var content = 'articles...'
    console.log(this.state.isDetail)
    return (
      <div className={css(styles.container)}>
        <div style={{display: this.display(false)}}>{content}</div>
        <Detail style={{display: this.display(true)}} article={this.state.articleChosen} onBack={this.onBack} />
      </div>
    )
  }
}

const mapProps = (state) => {
  return {
 
  }
}

const mapDispatch = (dispatch, getState) => {
  return {
 
  }   
}

export default connect(mapProps, mapDispatch)(Articles)
