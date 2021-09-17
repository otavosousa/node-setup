const express = require('express')
const app = express()
require('dotenv').config({  
    path: process.env.NODE_ENV === "dev" ? "./envs/.env.dev" : "./envs/.env.prod" 
})


app.use(express.json())

app.get('/', (req, res) => {
    return res.json({msg: 'Hello world!'})
})

app.listen(process.env.PORT, () => console.log('Servidor executando na porta ' + process.env.PORT))