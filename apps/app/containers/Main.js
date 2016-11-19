import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import {connect} from 'react-redux'
import Home from './Home'
import About from './About'
import Articles from './Articles'
import TabItem from '../../common/TabItem'

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    overflow: 'auto',
    backgroundColor: 'white'
  }
})

// let post = {
//   title: 'this is the recent post',
//   content: ` A long post contains something
// Integer nec hendrerit dui, ac cursus augue. Quisque vel dignissim enim. 
// Suspendisse nec commodo erat. Maecenas sed fermentum ligula. Pellentesque cursus massa quis lectus tristique convallis vitae nec massa. Etiam molestie dolor semper viverra hendrerit. Morbi vulputate massa vitae nulla eleifend dapibus. Pellentesque vel porttitor odio.
//   `,
// }

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      article: {},
    }
  }
  componentDidMount() {
    console.log('main did mount...')
  }
  render() {
    // var content = ((t) => {
    //   switch (t) {
    //     case 'articles':
    //       return <Articles />
    //     case 'about':
    //       return <About />
    //     case 'home':
    //     default:
    //       return <Home article={this.state.article} />
    //   }})(this.props.tab)
    return (
      <div className={css(styles.mainContainer)}>
        <TabItem content={<Home />} show={this.props.tab === 'home'} />
        <TabItem content={<Articles />} show={this.props.tab === 'articles'} />
        <TabItem content={<About />} show={this.props.tab === 'about'} />
      </div>
    )
  }
}
Main.propTypes = {
  tab: React.PropTypes.string
}
const mapProps = (state) => {
  return {
    tab: state.tab
  }
}
export default connect(mapProps)(Main)
