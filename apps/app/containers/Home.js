/* global fetch */
import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Spinner from '../components/Spinner'
// import ReactMarkdown from 'react-markdown'
import Article from '../components/Article'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: '50px 20px'
  }

})

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      article: {}
    }
  }
  componentDidMount() {
    fetch('/api/articles/recent')
    .then((response) => {
      var j = response.json()
      // console.log(j)
      return j 
    })
    .then((json) => {
      // console.log(json[0])
      this.setState({article: json[0]})
    })
  }
  render () {
    var content = this.state.article.title ? (<Article article={this.state.article} />) : <Spinner />
    return (
      <div className={css(styles.container)}>
        {content}
      </div>
    )
  }
}

export default Home
  