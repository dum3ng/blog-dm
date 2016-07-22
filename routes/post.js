var express = require('express')
var router = express.Router()
var Post = require('../models/post')

router.route('/:id')
.get((req,res)=>{
    Post.findById(req.params.id,(err,post)=>{
        if(err) throw err
        res.render('post.jade',{post})
    })
})


module.exports = router