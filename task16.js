const express = require("express");
const cors = require("cors");

const app = express();

/*const corsOptions = {
    origin: 'http://youtube.com', // Replace with your allowed origin
    optionsSuccessStatus: 200,
  };
  
app.use(cors(corsOptions));*/

app.use(cors());

app.get('/', (req,res)=>{
    res.send("CORS is Enabled");
})

app.listen(5000, ()=>{
    console.log("server running.");
})