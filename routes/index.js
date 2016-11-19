var express = require('express');
var router = express.Router();
var Article = require('../models/article')
var Category = require('../models/category')
// var flow = require('nimble')

/* GET home page. */
router.get('/', function(req, res, next) {
    // res.setHeader('content-type','text/html')
    // res.write('')
    Article.find({},(err,articles)=>{
        if(err) throw err

        res.render('index.jade',{articles})

    })  


});

module.exports = router;
