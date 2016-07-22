var router = require('express').Router()
var Post = require('../models/post')

router.route('/:id')
.get((req,res)=>{
    var param = req.params.id
    var post 
    if(param==='new'){
        res.render('edit.jade')
    }else{
        post = Post.findById(param,(err,post)=>{
            if(err) throw err 
            res.render('edit.jade',{post})
        })
    }
})
.post((req,res)=>{
    var param = req.params.id
    var post 
    if(param==='new'){
        //create a new post
        Post.create({title:req.body.title,
                    author:req.body.author,
                    category:req.body.category,
                    content:req.body.content
                    },(err,post)=>{
                        if(err) throw err 
                        res.redirect('/')
                    })
    }else{
        //update the old post
        //  Post.findById(param,(err,post)=>{
        //     if(err) throw err 
        //     res.render('edit.jade',{post})
        // })
        Post.update({_id:param},
                    {title:req.body.title,
                    category:req.body.category,
                    content:req.body.content
                    },
                    (err,post)=>{
                        if(err) throw err 
                        res.redirect('/')
        })
    }
})


module.exports = router