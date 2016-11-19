// const GOTO_HOME = 'GOTO_HOME'
// const GOTO_ARCHIVES = 'GOTO_ARCHIVES'
// const GOTO_ABOUT = 'GOTO_ABOUT'

// function gotoHome(){
//   return {
//     type: GOTO_HOME
//   }
// }

// function gotoArchives(){
//   return {
//     type: GOTO_ARCHIVES
//   }
// }

// function gotoAbout(){
//   return {
//     type: GOTO_ABOUT
//   }
// }

// export default TAB={
//   actionTypes: 
// }

import actionCreator from '../helpers/action-creator'
export default actionCreator({
  'GOTO_TAB': function gotoTab(tab){
    return {
      type: 'GOTO_TAB',
      tab
    } 
  }
  // 'GOTO_HOME': function gotoHome(){
  //     return {
  //       type: GOTO_HOME
  //     }
  //   },
  // 'GOTO_ARCHIVES': function gotoArchives(){
  //   return {
  //     type: GOTO_ARCHIVES
  //   }
  // },
  // 'GOTO_ABOUT': function gotoAbout(){
  //   return {
  //     type: GOTO_ABOUT
  //   }
  // }
})