var router = require('express').Router()
var Post = require('../models/post')
var Category = require('../models/category')

router.route('/:id')
.get((req,res)=>{
    var param = req.params.id
    var post 
    if(param==='new'){
        console.log('poll should be null')
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
    var category = req.body.category
    if(!category){
        category = 'default'
    }
    if(param==='new'){
        //create a new post
        Category.find({name:category},(err,cat)=>{
            if(err) throw err 
            function create(_cat){
                Post.create({title:req.body.title,
                            author:req.body.author,
                            category:_cat,
                            content:req.body.content
                            },(err,post)=>{
                                if(err) throw err 
                                res.redirect('/')
                            })
            }
            console.log('new found should be null.',cat)
            if(!cat.length){ // create a new category
                console.log('should go here.')
                Category.create({name:category},(err,cat)=>{
                    if(err) throw err 
                    create(category)                    
                })
            }else{
                create(category)
            }
        })
    }else{ //update
                function update(){
                        Post.update({_id:param},
                                    {title:req.body.title,
                                    category:category,
                                    content:req.body.content,
                                    editDate:Date.now()
                                    },
                                    (err,post)=>{
                                        if(err) throw err 
                                        res.redirect('/')
                                })
                }
                Category.find({name:category},(err,cat)=>{
                    if(err) throw err 
                    if(!cat){ // create a new category
                        Category.create({name:category},(err,cat)=>{
                            if(err) throw err 
                            update()
                        })
                    }else{
                        update()
                    }
                })
                
            }
})


module.exports = router