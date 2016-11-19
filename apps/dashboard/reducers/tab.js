import TAB from '../actions/tab'

export default (state = 'home', action) => {
  switch (action.type) {
    case TAB.GOTO_TAB: {
      return action.tab
    }
    default:
      return state
  }
}
