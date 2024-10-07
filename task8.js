const express = require("express");

const app = express();

app.get('/json', (req,res)=>{
    res.json({ message: "Hello, world!" });
})

app.listen(5000, (req,res)=>{
    console.log("Server running ")
})