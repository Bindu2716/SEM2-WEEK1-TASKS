const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

const app = express();

dotenv.config({ path: './config.env' });

const port = process.env.PORT || 2000;

app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.listen(port, ()=>{
    console.log("server running ");
})