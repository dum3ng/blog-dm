import  * as Types from '../actions/category'

export default (state = '', action) => {
  switch (action.type) {
    case Types.CHOOSE_CATEGORY: {
      return action.category
    }
    default:
      return state
  }
}
