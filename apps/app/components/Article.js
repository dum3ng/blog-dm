import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'
import ReactMarkdown from 'react-markdown'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // display: 'flex'
  },
  span: {
    marginRight: 50
  },
  wrapMeta: {
    padding: '10px 0 20px 0'
  }
})

class Article extends Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }
  render() {
    return (
      <div className={css(styles.container)}>
        <h2>{this.props.article.title}</h2>
        <div className={css(styles.wrapMeta)}>
          <span className={css(styles.span)}><strong>category: </strong>{this.props.article.category}</span>
          <span className={css(styles.span)}><strong>tags: </strong>{this.props.article.tags}</span>
        </div>
        <ReactMarkdown source={this.props.article.content} />
      </div>
    )
  }
}

Article.propTypes = {
  article: React.PropTypes.object,
}

export default Article
