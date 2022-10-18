//const user = require('../models/user')
const {response} = require('express')
const User = require('../models/users')

//show the list of employees
const index = (req,res,next)=>{
    User.find()
    .then(response =>{
        res.json({
            response
        })
    })
    .catch(error=>{
       res.json({
        message: 'AN Error Occured'
       }) 
    })
}
//show single user
const show = (req, res, next)=>{
    let MobileNumber = req.body.MobileNumber
    User.findOne({MobileNumber})
    .then(response => {
        res.json({
            response
        })
    .catch(error=> {
        res.json({
        message: 'AN error occured'
    })

    // b.collection('movies').findOneAndUpdate(req.body.title,{
    //     title: 'Avengers',
    // },(err, result) => {
    //     if (err) {
    //         res.send({
    //             'error': 'An error has occured'
    //         });
    //     } else {
    //         res.send(result.ops[0]);
})
}) 
}
const store = async (req, res, next)=>{
    let user = new User({
        MobileNumber: req.body.MobileNumber,
        MPin: req.body.MPin
        
    })
    await user.save()
    .then(response =>{
        res.json({
            message : 'user added successfully'
        })
    })
    .catch(error=>{
        res.json({
            message: 'An error occured'
        })
    })
}

//update 
const update = (req,res,next) =>{
    let MobileNumber = req.body.MobileNumber
    let updatedData = ({
        MobileNumber : req.body.MobileNumber,
        MPin : req.body.MPin
    })
    User.findOneAndUpdate(MobileNumber,  updatedData)
    .then(()=> {
        res.json({
            message : 'user added successfully'
        })
    })
    .catch(error=>{
        res.json({
            message: 'An error occured'
        })

    })
}
module.exports = {
    index,show,store,update

}
