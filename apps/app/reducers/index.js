import {combineReducers} from 'redux'
import tab from './tab'
import articles from './articles'
import category from './category'

const reducers = combineReducers({
  tab,
  articles,
  category
})
// console.log(reducers)
export default reducers
