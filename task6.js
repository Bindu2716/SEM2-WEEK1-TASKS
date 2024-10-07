const express = require("express");

const app = express();

app.get('/user/:id', (req,res)=>{
    const userId = req.params.id;

    res.send(`User ID: ${userId}`);
})

app.listen(5000, ()=>{
    console.log("Server running.");
})