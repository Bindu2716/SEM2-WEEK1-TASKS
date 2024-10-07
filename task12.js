const express = require("express");

const app = express();

app.use((req,res,next)=>{
    console.log(`${req.method} ${req.url}`);
    next();
});

app.get('/', (req,res)=>{
    res.send("Hello World");
});

app.delete("/delete/:id", (req,res)=>{
    const id = req.params.id;
    res.json({ message : `Deleted item with ID: ${id} `});
   // res.send("Success!!");
});

app.listen(5000, ()=>{
    console.log("Server runnign...task_12");
})