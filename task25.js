const express = require('express');
const app = express();

app.get('/success', (req, res) => {
    res.status(200).send("Request was successful!"); // 200 OK
});

app.post('/create', (req, res) => {
    res.status(201).send("Resource created successfully!"); // 201 Created
});

app.get('/bad-request', (req, res) => {
    res.status(400).send("Bad Request! Please check your input."); // 400 Bad Request
});

app.get('/unauthorized', (req, res) => {
    res.status(401).send("Unauthorized! Please log in."); // 401 Unauthorized
});

app.get('/not-found', (req, res) => {
    res.status(404).send("Resource not found!"); // 404 Not Found
});

app.get('/server-error', (req, res) => {
    res.status(500).send("Internal Server Error!"); // 500 Internal Server Error
});

app.listen(5000, () => {
    console.log(`Server running.`);
});