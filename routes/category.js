var router = require('express').Router()
var Category = require('../models/category')
var Post = require('../models/post')
var async = require('async')

router.route('/')
.get((req,res)=>{
    Category.find({},(err,categories)=>{
        if(err) throw err 
        var cats = categories.length
        var tasks=0
        async.each(categories, (cat, callback) => {
            Post.find({category: cat.name}, (err, posts) => {
                if (err) 
                    callback(err)
                else{
                    cat.posts = posts
                    callback()
                }
            })
        }, (err) => {
            if(err) console.log(err)
            else
                res.render('category', {categories})
        })
        // categories.forEach((cat)=>{
        //     async.each()
        //     Post.find({category:cat.name},(err,posts)=>{
        //         if(err) throw err 
        //         cat.posts = posts
        //         tasks++
        //         if(tasks===cats){
        //             res.render('category',{categories})
        //         }
        //     })
        // })
        
        
    })
})

// router.route('/:name')
// .get((req,res)=>{
//     console.log(req.params.name)
//     Category.find({},(err,cats)=>{
//         console.log('all cats:',cats)
//     })
//     Category.findOne({name:req.params.name},(err,cat)=>{
//         if(err) throw err 
//         console.log('find cat :'+cat)
//         console.log(cat._id)
//         console.log(cat.id)
//         console.log(cat.name)

//         Post.find({category:cat.name},(err,posts)=>{
//             if(err) throw err 
//             res.render('category.jade',{category:cat,posts})
//         })
//     })
// })

module.exports=  router