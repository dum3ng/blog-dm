const GOTO_TAB = 'GOTO_TAB'

let gotoTab = (tab) => {
  return {
    type: GOTO_TAB,
    tab
  }
}

export default {
  GOTO_TAB,
  gotoTab
}
