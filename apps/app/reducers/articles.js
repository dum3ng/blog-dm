import Articles, * as Types from '../actions/articles'
import {Map, fromJS} from 'immutable'
console.log(Types)
export default function (state = Map({
  recentFetching: false,
  articlesFetching: false,
  articleChosen: {},
  articles: Map({}),
  articleRecent: {}}), action) {
  switch (action.type) {
    case Types.CHOOSE_ARTICLE: {
      return state.set('articleChosen', action.article)
    }
    case Types.ARTICLE_RECENT_FETCHED: {
      console.log('recent fetched.')
      var s = state.set('articleRecent', action.article)
      console.log(s.toJS())
      return s
    }
    case Types.ARTICLES_FETCHED: {
      return state.set('articles', Map(action.articles))
    }
    case Types.ARTICLES_FETCH_START: {
      return state.set('articlesFetching', true)
    }
    case Types.ARTICLES_FETCH_END: {
      return state.set('articlesFetching', false)
    }
    case Types.ARTICLE_RECENT_FETCH_START: {
      return state.set('recentFetching', true)
    }
    case Types.ARTICLE_RECENT_FETCH_END: {
      return state.set('recentFetching', false)
    }

    default:
      return state
  }
}
