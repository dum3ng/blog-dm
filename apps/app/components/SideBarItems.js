import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'
import TabBarItem from '../../common/TabBarItem'
const styles = StyleSheet.create({
  container: {
    flex: 3,
    display: 'flex',
    minHeight: 200,
    flexDirection: 'column',
    justifyContent: 'space-around'
  }

})

class SideBarItems extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  render () {
    const normalColor = 'white'
    const activeColor = '#4aabff'
    return (
      <div className={css(styles.container)}>
        <TabBarItem title='Home'
          active={this.props.tab === 'home'} onClick={this.props.gotoHome}
          normalColor={normalColor} activeColor={activeColor}
          normalImage='/img/home.svg' activeImage='/img/homeActive.svg' />
        <TabBarItem title='Articles'
          active={this.props.tab === 'articles'} onClick={this.props.gotoArticles}
          normalColor={normalColor} activeColor={activeColor}
          normalImage='/img/articles.svg' activeImage='/img/articlesActive.svg' />
        <TabBarItem title='About me'
          active={this.props.tab === 'about'} onClick={this.props.gotoAbout}
          normalColor={normalColor} activeColor={activeColor}
          normalImage='/img/about.svg' activeImage='/img/aboutActive.svg' />
      </div>
    )
  }
}
SideBarItems.propTypes = {
  tab: React.PropTypes.string,
  gotoHome: React.PropTypes.func,
  gotoAbout: React.PropTypes.func,
  gotoArticles: React.PropTypes.func
}
export default SideBarItems
