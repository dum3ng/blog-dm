var mongoose = require('mongoose')
var Schema = mongoose.Schema

var Article = new Schema({
    title:String,
    category:String,
    createAt:{type:Date,default:Date.now},
    updateAt:{type:Date,default:Date.now},
    content:String,
    author:String,
    tags: [String],
    comments:[{author:String,
                date:{type:Date,default:Date.now},
                content:String}],

})


module.exports = mongoose.model('Article',Article)