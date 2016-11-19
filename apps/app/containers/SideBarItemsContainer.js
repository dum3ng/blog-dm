import {connect} from 'react-redux'
import SideBarItems from '../components/SideBarItems'
import TAB from '../actions/tab'

console.log(TAB)
const mapProps = (state) => {
  return {
    tab: state.tab
  }
}

const mapDispatch = (dispatch) => {
  return {
    gotoHome: () => {
      dispatch(TAB.actions.gotoTab('home'))
    },
    gotoArticles: () => {
      dispatch(TAB.actions.gotoTab('articles'))
    },
    gotoAbout: () => {
      dispatch(TAB.actions.gotoTab('about'))
    },
  }
}

export default connect(mapProps, mapDispatch)(SideBarItems)
