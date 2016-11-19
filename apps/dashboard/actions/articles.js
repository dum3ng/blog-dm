/* global fetch, $ */
// import actionCreator  from '../../common/helpers/action-creator'

const save = (article, isNew) => {
  let data = new FormData()
  Object.keys(article).forEach((k)=>{
    data.append(k, article[k])
  })
  for (let e of data.entries()) {
    console.log(e)
  }
  let init = {
    method: 'POST',
    credentials: 'same-origin',
    body: data
  }
  return (dispatch) => {
    // if (isNew) {
    //   return $.post('/api/articles/new', article, (msg) => {
    //     if (msg === 'saved') dispatch(saved())
    //     else {
    //       dispatch(saveFailed())
    //     }
    //   })
    if (isNew) {
      return fetch('/api/articles/new', init)
        .then((response) => {
          return response.text()
        })
        .then((msg) => {
          if (msg === 'saved') {
            dispatch(saved())
          } else {
            dispatch(saveFailed())
          }
          setTimeout(() => { dispatch(reset()) }, 2000)
        })
    } else {
      return fetch(`/api/articles/${article.id}`, init)
    }
  }
}
const reset = () => {
  return {
    type: 'RESET_SAVE_STATE'
  }
}

const saved = () => {
  return {
    type: 'SAVED'
  }
}

const saveFailed = () => {
  return {
    type: 'SAVE_FAILED'
  }
}

export default {
  save,
  saved,
  saveFailed,
  reset,
  SAVED: 'SAVED',
  SAVE_FAILED: 'SAVE_FAILED',
  RESET_SAVE_STATE: 'RESET_SAVE_STATE'
}
