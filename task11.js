const express = require("express");

const app = express();

app.delete('/delete/:id', (req,res)=>{
    const id = req.params.id;
    console.log(`Deleted item with ID : ${id}`);
    res.send("Success!!");
})

app.listen(5000, (req,res)=>{
    console.log("server running task_11")
})