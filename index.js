const express = require('express');
const connect = require('./config/db');
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())
const {userPost , userLogin , Dashboard , randomWord , Update} = require('./controller/game.controller')


app.post('/user' , userPost)

app.post('/login' , userLogin)
app.get('/dashboard' , Dashboard)
app.get('/randomWord' , randomWord)
app.patch('/:id' , Update )


const port = process.env.PORT || 5000
const start = async ()=>{
    await connect()
    app.listen(port, () => {

        console.log("port 5000..");
    });

}




start()