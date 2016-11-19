import Articles from '../actions/articles'

function reducer (state = {saveState: 'unsaved'}, action) {
  switch (action.type) {
    case Articles.SAVED: {
      return {saveState: 'saved'}
    }
    case Articles.SAVE_FAILED: {
      return {saveState: 'saveFailed'}
    }
    case Articles.RESET_SAVE_STATE: {
      return {saveState: 'unsaved'}
    }
    default:
      return state
  }
}

export default reducer
