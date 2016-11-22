import {chooseCategory} from './category'

export const CHOOSE_ARTICLE = 'CHOOSE_ARTICLE'

export const ARTICLES_FETCHED = 'ARTICLES_FETCHED'
export const ARTICLES_FETCH_START = 'ARTICLES_FETCH_START'
export const ARTICLES_FETCH_END = 'ARTICLES_FETCH_END'

export const ARTICLE_RECENT_FETCHED = 'ARTICLE_RECENT_FETCHED'
export const ARTICLE_RECENT_FETCH_START = 'ARTICLE_RECENT_FETCH_START'
export const ARTICLE_RECENT_FETCH_END = 'ARTICLE_RECENT_FETCH_END'

const chooseArticle = (article) => {
  return {
    type: CHOOSE_ARTICLE,
    article
  }
}
const fetchRecent = () => {
  return (dispatch) => {
    dispatch({type: ARTICLE_RECENT_FETCH_START})
    fetch('/api/articles/recent').then((res) => {
      return res.json()
    }).then((json) => {
      dispatch(articleRecentFetched(json[0]))
      dispatch({type: ARTICLE_RECENT_FETCH_END})
    })
  }
}

const articleRecentFetched = (article) => {
  return {
    type: ARTICLE_RECENT_FETCHED,
    article
  }
}

const fetchArticles = () => {
  return (dispatch) => {
    dispatch({type: ARTICLES_FETCH_START})
    fetch('/api/articles').then((res) => {
      return res.json()
    }).then((json) => {

      dispatch(articlesFetched(json))
      dispatch(chooseCategory(Object.keys(json)[0]))
      dispatch({type: ARTICLES_FETCH_END})
    })
  }
}

const articlesFetched = (articles) => {
  return {
    type: ARTICLES_FETCHED,
    articles
  }
}

export default {
  chooseArticle,
  fetchArticles,
  fetchRecent
}
