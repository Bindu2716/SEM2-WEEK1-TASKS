const express = require('express');
const { check, validationResult } = require('express-validator'); 
const app = express();

app.use(express.json()); 


app.post('/submit', [
   
    check('name')
        .notEmpty().withMessage("Name is required")
        .isLength({ min: 3 }).withMessage("Name must be at least 3 characters long"),
    check('age')
        .isInt({ min: 18 }).withMessage("Age must be a number and at least 18"),
], (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    
    const { name, age } = req.body;
    res.json({ message: `Hello, ${name}. You are ${age} years old.` });
});


app.listen(5000, () => {
    console.log("Server running.");
});