var express = require('express');
var router = express.Router();
var Post = require('../models/post')
var Category = require('../models/category')
// var flow = require('nimble')

/* GET home page. */
router.get('/', function(req, res, next) {
    var emptyP = []
    var emptyC = []

    var fns = 0
    Post.find({},(err,posts)=>{
        if(err) throw err
        fns++
        emptyP = posts
        if(fns===2){
            res.render('index.jade',{posts:emptyP,categories:emptyC})
        }
    })  
    Category.find({},(err,cats)=>{
        if(err) throw err 
        fns++
        emptyC = cats
        if(fns===2){
            res.render('index.jade',{posts:emptyP,categories:emptyC})
        }
    })
  

});

module.exports = router;
