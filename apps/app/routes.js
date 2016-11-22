import { Route, IndexRoute } from 'react-router'
import React from 'react'
import Screen from './containers/Screen'
import Home from './containers/Home'
import Articles from './containers/Articles'
import Detail from './containers/Detail'
import About from './containers/About'
import Category from './containers/Category'

// export default (
//   <Route path='/' component={Screen}>
//     <IndexRoute component={Home} />
//     <Route path='/articles' component={Test} >
//     </Route>
//     <Route path='/test' component = {Test} />
//     <Route path='/articles/:title' component={Detail} />
//     <Route path='/about' component={About} />
//   </Route>
//   )
export default (
  <Route path='/' component={Screen}>
    <IndexRoute component={Home} />
    <Route path='/articles' component={Articles}>
      <Route path='/articles/:category' component={Category} />
      <Route path='/articles/:category/:title' component={Detail} />
    </Route>
    <Route path='/about' component={About} />

  </Route>
  )