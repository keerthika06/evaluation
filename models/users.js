const mongoose = require('mongoose')
const Schema = mongoose.Schema


const userSchema = new Schema({
    MobileNumber:{
        type: Number
    },
    MPin : {
        type: Number
    }
},{timestamps : true})

const users = mongoose.model('user',userSchema)
module.exports = users
