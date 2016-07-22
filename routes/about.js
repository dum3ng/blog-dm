var router = require('express').Router()

router.route('/')
.get((req,res)=>{
    res.render('about.jade')
})

module.exports = router