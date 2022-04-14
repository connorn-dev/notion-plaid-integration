// Import packages:
require("dotenv").config()
const express = require("express")

// Create express application
const app = express() 
app.listen(process.env.PORT)
app.use(express.static(__dirname + '/public'))

// Front-end mainpage
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})