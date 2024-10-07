const express = require("express");

const app = express();

const myRoutes = require("./routes");

app.use(express.json());

app.use('/api', myRoutes);

app.listen(5000, ()=>{
    console.log("server running")
})