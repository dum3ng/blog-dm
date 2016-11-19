var router = require('express').Router()

// /admin/login
function authenticate (req, res, next) {
  if (req.session.login) next()
  else res.redirect('/admin/login')
}

router.route('/login')
.get((req,res)=>{
    res.render('login.jade')
})
.post((req, res) => {
    console.log(req.body)
  if(req.body.username==='dumeng' && req.body.password==='password'){
    let session = req.session
    session.login = true
    res.send('success')
  }else{
    res.send('wrong.')
  }
})

// /admin/logout
router.route('/logout')
.get((req, res) => {
  let session = req.session
  if(session.login){
    session.login = false
    res.redirect('/')
  }else{
    res.end()
  }
})

router.route('/dashboard')
.get((req, res) => {
  res.render('dashboard')
  // if(isAuthenticated(req))
  //   res.render('dashboard')
  //   // res.send('dashboard is here')
  // else{
  //   console.log('to render login page..')
  //   res.redirect('/admin/login')
  // }
})

module.exports = router
