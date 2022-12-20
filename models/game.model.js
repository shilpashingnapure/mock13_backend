const mongoose = require('mongoose')

const userDetails = new mongoose.Schema({
    name : {type : String} ,
    level : {type : String} ,
    score : {type : Number}

},{
    versionKey:false,
    timestamps:true
})

module.exports = mongoose.model('userDetails' , userDetails)
