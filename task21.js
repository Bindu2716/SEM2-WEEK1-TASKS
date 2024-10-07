const express =require("express");

const app = express();

app.use(express.urlencoded({ extended : true }));

app.get('/', (req, res) => {
    res.send(`
        <form action="/submit" method="POST">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name">
            <label for="age">Age:</label>
            <input type="number" id="age" name="age">
            <button type="submit">Submit</button>
        </form>
    `);
});

app.post("/submit", (req,res)=>{
    const { name, age } = req.body;
    res.send(`Hello, ${name}. You are ${age} years old.`);
})

app.listen(5000, (req,res)=>{
    console.log("server running")
})