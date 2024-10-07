const express = require("express");

const app = express();

app.get('/api/data', (req,res)=>{
    const responseData = {
        message : "Hello",
        author : "Bindu",
        age : 19,
        success : true
    }
    res.json(responseData); // res.json() will send the JSON response.
})

app.listen(5000, (req,res)=>{
    console.log("server running")
})