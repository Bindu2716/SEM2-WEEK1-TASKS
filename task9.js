const express = require("express");

const app = express();

app.use(express.json());

app.post('/data', (req,res)=>{
    const IncomingData = req.body;
    console.log(IncomingData);
    res.send("Success!!");
})

app.listen(5000, ()=>{
    console.log("Server running")
})