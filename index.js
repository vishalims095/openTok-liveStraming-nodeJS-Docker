const express = require('express')
require('dotenv').config()
const router = require('./route')
const app = express()
const bodyParser  = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/', router)
app.listen(process.env.PORT, () =>{
    console.log("server is running on", `${process.env.PORT}`)
})

