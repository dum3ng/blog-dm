/* global fetch */
import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Spinner from '../components/Spinner'
// import ReactMarkdown from 'react-markdown'
import Article from '../components/Article'
import {connect} from 'react-redux'
import ArticlesAction from '../actions/articles'

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
    }
  }
  componentDidMount() {
    console.log('home mount')
    if (!this.props.recent.title) {
      this.props.fetchRecent()
    }
  }
  render () {
    var content = this.props.fetching ? <Spinner /> : (<Article article={this.props.recent} />)
    return (
      <div className={css(styles.container)}>
        {content}
      </div>
    )
    // return <Spinner />
  }
}
Home.propTypes = {
  fetching: React.PropTypes.bool,
  recent: React.PropTypes.object
}
const mapProps = (state) => {
  return {
    recent: state.articles.get('articleRecent'),
    fetching: state.articles.get('recentFetching')
  }
}
const mapDispatch = (dispatch) => {
  return {
    fetchRecent: () => {
      dispatch(ArticlesAction.fetchRecent())
    }
  }
}
export default connect(mapProps, mapDispatch)(Home)
