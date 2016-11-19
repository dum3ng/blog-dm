var express = require('express')
var router = express.Router()
const Article = require('../models/article')

var multer = require('multer')()
/* GET home page. */
function changeArticle (data, article) {
  article.title=data.title
  article.content=data.content
  article.tags=data.tags
  article.category=data.category
  return article
}

function authenticate(req, res, next){
  // if(req.session.login) next()
  // else res.redirect('/admin/login')
  next()
}
/*
 */
router.route('/articles')
.get((req, res, next) => {
  Article.find({}, (err, articles) => {
    if (err) res.send('error')
    let results = {}
    articles.forEach((art) => {
      if (results[art.category]){
        results[art.category].push(art)
      } else {
        results[art.category] = [art]
      }
    })
    res.send(results)
  })
})

router.get('/articles/recent', function(req, res, next) {
  Article.find().limit(1).sort({$natural: -1}).exec((err, article) => {
    if (err) return res.send('no recent article')
    setTimeout(() => {
      res.send(article)
    }, 2000)
  })
})

/**
 * 
 */


router.route('/articles/new')
.post(multer.single(), (req, res, next) => {
  console.log('in the api...')
  let article = new Article()
  changeArticle(req.body, article)
  console.log(req.body)
  console.log(article)
  res.setHeader('Access-Control-Allow-Origin', '*')
  article.save((err) => {
    if (err) {
      res.send('error')
      return
    }
    res.send('saved')
  })
})



router.route('/articles/:id')
.get((req,res,next) => {
  Article.find({id}, (err, article) => {
    if(err) return res.send('not such article')
    res.send(article)
  })
})
.put(authenticate, (req, res, next) => {
  const id = req.params.id
  const data = req.body
  Article.update({id}, {
    title: data.title,
    content: data.content,
    category: data.category,
    tags: data.tags.split(',').map((x)=>x.trim()),
  }, (err, raw)=>{
    if(err) return res.send('error')
    res.send('updated')
  })

})
.delete(authenticate, (req, res, next) => {
  Article.remove({id: req.params.id}, (err) => {
    if(err) return res.send('error')
    res.send('deleted')
  })
})


module.exports = router;
