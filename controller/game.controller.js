
const Userdetails = require('../models/game.model')

const userPost = async (req , res)=>{
    try{
        const user = await Userdetails.create(req.body);
        return res.send(user)
    }catch(e){
        return res.status(500).send(e.message)
    }
}

const userLogin = async (req , res)=>{
    try{
        const user = await Userdetails.find({name : req.body.name})

        return res.send(user)
    }catch(e){
        return res.status(500).send(e.message)
    }
}

const Dashboard = async (req , res)=>{
    try{
        const users = await Userdetails.find()
        return res.send(users)
    }catch(e){
        return res.status(500).send(e.message)
    }
}
const Update = async (req , res)=>{
    try{
        console.log(req.body)
        const user = await Userdetails.findByIdAndUpdate(req.body)
        console.log(user)
        return res.send(user)
    }catch(e){
        return res.status(500)
    }
}
const randomWord = async (req , res)=>{
    try{
        let N = Math.floor(Math.random() * 6)
        let word = String.fromCharCode(97+N)
        for(let i = 0 ; i < N ; i++){
            let random = Math.floor(Math.random() * 26)
            let char = 'a'.charCodeAt()
            word += String.fromCharCode(char+random)
        }
        return res.send({word})
    }catch(e){
        return res.status(500).send(e.message)
    }
}

module.exports = {userPost , userLogin , Dashboard , randomWord , Update}