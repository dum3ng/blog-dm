import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'
import TabBarItem from '../../common/TabBarItem'
const styles = StyleSheet.create({
  container: {
    flex: 3,
    display: 'flex',
    minHeight: 200,
    flexDirection: 'column',
    justifyContent: 'space-around',
    '@media (max-width: 768px)': {
      minHeight: 50,
      flexDirection: 'row'
    }
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
          active={this.props.tab === 'home'} location='/'
          normalColor={normalColor} activeColor={activeColor}
          normalImage='/img/home.svg' activeImage='/img/homeActive.svg' />
        <TabBarItem title='Articles'
          active={this.props.tab === 'articles'} location='/articles'
          normalColor={normalColor} activeColor={activeColor}
          normalImage='/img/articles.svg' activeImage='/img/articlesActive.svg' />
        <TabBarItem title='About me'
          active={this.props.tab === 'about'} location='/about'
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
