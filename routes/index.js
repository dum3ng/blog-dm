var express = require('express');
var router = express.Router();
var Post = require('../models/post')
var Category = require('../models/category')
// var flow = require('nimble')

/* GET home page. */
router.get('/', function(req, res, next) {
    // res.setHeader('content-type','text/html')
    // res.write('')
    Post.find({},(err,posts)=>{
        if(err) throw err

        res.render('index.jade',{posts})

    })  


});

module.exports = router;
