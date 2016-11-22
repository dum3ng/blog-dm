import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Article from '../components/Article'
import {browserHistory} from 'react-router'
import {connect} from 'react-redux'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: '10px 50px'
  },
  back: {
    margin: '10px 0 20px 0',
    width: '100%',
    height: 50,
    borderWidth: '1px 0',
    borderStyle: 'solid',
    borderColor: 'gray',
    lineHeight: '36px',
    padding: 7,
    cursor: 'pointer'
  },
  span: {
    color: 'black',
    padding: '10px 5px',
    marginRight: 0
  }
})

class Detail extends Component {
  constructor (props) {
    super(props)
    this.state = {
      
    }
    this.onBack = this.onBack.bind(this)
  }
  onBack () {
    browserHistory.push('/articles')
  }
  render () {
    return (
      <div className={css(styles.container)} style={this.props.style}>
        <div className={css(styles.back)} onClick={this.onBack}>
          <span className={css(styles.span)}>
            <img src='/img/back.svg' />
          </span>
          <span className={css(styles.span)}>Back</span>
        </div>
        <Article article={this.props.article} />
      </div>
    )
  }
}

Detail.propTypes = {
  style: React.PropTypes.object,
  article: React.PropTypes.object,
  onBack: React.PropTypes.func
}
const mapProps = (state) => {
  return {
    article: state.articles.get('articleChosen')
  }
}

export default connect(mapProps)(Detail)
