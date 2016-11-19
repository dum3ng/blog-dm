import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: '50px 20px'
  }

})

const propTypes = {
  article: PropTypes.object,
  onSave: PropTypes.func,
  saveState: PropTypes.string
}

class ArticlePage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: this.props.article.title || 'untitled',
      content: this.props.article.content || '',
      category: this.props.article.category || 'uncategorized',
      tags: this.props.article.tags || ''
    }
    this.change = this.change.bind(this)
    this.save = this.save.bind(this)
  }
  change (e) {
    let value
    // value = e.target.id === 'content' ? e.target.value : e.target.value.trim()
    value = e.target.value
    this.setState({[e.target.id]: value})
  }
  save (e) {
    const article = {
      title: this.state.title.trim(),
      category: this.state.category.trim(),
      content: this.state.content,
      tags: this.state.tags.trim()
    }
    this.props.onSave(article)
  }
  render () {
    const buttonTitle = this.props.saveState === 'unsaved' ? 'save' : this.props.saveState
    console.log(buttonTitle)
    return (
      <div className={css(styles.container)}>
        <h3>Title</h3>
        <input id='title' value={this.state.title} onChange={this.change} />
        <div>
          <span>category</span>
          <input id='category' value={this.state.category} onChange={this.change} />
        </div>
        <div>
          <span>tags</span>
          <input id='tags' value={this.state.tags.toString()} onChange={this.change} />
        </div>
        <textarea id='content' cols={50} rows={20} value={this.state.content} onChange={this.change} />
        <button disabled={this.props.saveState !== 'unsaved'} onClick={this.save} > {buttonTitle} </button>
      </div>
    )
  }
}
ArticlePage.propTypes = propTypes

export default ArticlePage
