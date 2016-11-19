import TAB from '../actions/tab'
// console.log(TAB)
const tab = (state = 'home', action) => {
  switch(action.type){
    case TAB.actionTypes.GOTO_TAB:{
      return action.tab
    }
    default:
    return state
  }
}
export default tab
