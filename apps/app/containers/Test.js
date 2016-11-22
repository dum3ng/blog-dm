import React from 'react'

export default React.createClass({
  getInitialState() {
    return {
      article: {}
    }
  },
  componentDidMount() {
    fetch('/api/articles/recent')
    .then((res) => {
      return res.json()
    })
    .then((res) => {
      this.setState({article: res[0]})
    })
  },
  render(){
    return <div>
    <h2>text</h2>
    <div>{this.state.article.title}</div>
    </div>
  }
})
