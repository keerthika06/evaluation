const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const register = ( req,res,next) => {
    bcrypt.hash(req.body.MPin.toString(),10, function(err, hashedPass){
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
        .then(docs =>{
            res.json({
                message: 'user added succesfully'
            })
        })
        .catch(error => {
            res.json({
                message : 'An error occured',error
            })
        })
    })

}
const login = (req,res,next)=>{
    var MobileNumber = req.body.MobileNumber
    var MPin = req.body.MPin
    User.findOne(
        //{$or : [
        {

            MobileNumber
        }
        //]}
        )
    .then( (user) => {
        if(user)
        {
             bcrypt.compare(MPin.toString(),user.MPin, function(err, result){
                if(err){
                    return res.json({
                       error:err
                    })
                }
                if(result){
                    let token = jwt.sign({MobileNumber : user.MobileNumber}, 'verySecretValue',{expiresIn: '1h'})
                    res.json({
                        message: 'Login Succesful!',
                        token
                    })

                }
                else {
                    res.json({
                        message: 'Password does not match'
                    })
                }
            })

        }else{
            res.json({
                message : 'NO user found'
            })
        }
    })
}

module.exports = {
    register, login
}