const express = require("express");
const compression = require("compression");
const path = require("path");

const app = express();

app.use(compression());

app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.listen(5000, ()=>{
    console.log("server running");
})