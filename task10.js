const express = require("express");

const app = express();

app.use(express.json());

app.put('/update', (req,res)=>{
    const updateData = req.body;
    console.log(updateData);
    res.send("Success!!")
})

app.listen(5000, ()=>{
    console.log("server runnig")
})