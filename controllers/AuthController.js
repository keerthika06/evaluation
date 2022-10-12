const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const register = ( req,res,next) => {
    bcrypt.hash(req.body.MPin,10, function(err, hashedPass){
        if(err) {
            res.json({
                error : err
            })
        }
        let user = new User ({
            MobileNumber : req.body.MobileNumber,
            MPin : hashedPass
        })
        user.save()
        // .then(()=> {
        //     res.json({
        //         message : 'user added successfully'
        //     })
        // })




        .then(user =>{
            res.json({
                message: 'user added succesfully'
            })
        })
        .catch(error => {
            res.json({
                message : 'An error occured'
            })
        })
    }) 
}
const login = (req,res,next)=>{

}
module.exports = {
    register
}