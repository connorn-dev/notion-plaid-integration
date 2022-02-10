require ('dotenv').config()

const express = require('express')
const app = express()
const notion = require("./notion")

app.listen(process.env.PORT)

app.get('/', (req, res) => {
    res.send("hello")
})