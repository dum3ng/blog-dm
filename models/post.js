var mongoose = require('mongoose')
var Schema = mongoose.Schema

var Post = new Schema({
    title:String,
    category:String,
    createdDate:{type:Date,default:Date.now},
    editDate:{type:Date,default:Date.now},
    content:String,
    author:String,
    comments:[{author:String,
                date:{type:Date,default:Date.now},
                content:String}],

})


module.exports = mongoose.model('Post',Post)