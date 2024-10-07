const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.send("Welcome to the homepage!");
});

app.use((req, res, next) => {
    res.status(404).send("Oops! Page not found. Please check the URL.");
});


app.listen(5000, () => {
    console.log("Server running .");
});