const express = require('express');
const app = express();

app.get('/redirect-me', (req, res) => {
    res.redirect('/new-location');
});


app.get('/new-location', (req, res) => {
    res.send('You have been redirected to the new location!');
});

app.get('/external-redirect', (req, res) => {
    res.redirect('https://www.youtube.com');
});

app.listen(5000, () => {
    console.log(`Server running.`);
});