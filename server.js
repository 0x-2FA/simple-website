const express = require('express');
const ejs = require('ejs');
const path = require('path');

const app = express();

const port = 3000;

app.set('view engine', 'ejs');

// get assets from the assets directory
app.use(express.static('assets'));

app.listen(port, () => {
    console.log(`Running on localhost:${port}`);
});

// render the index.html file
app.get('/', (req, res) =>{
    res.render('index');
});

// render the about.html file
app.get('/about', (req, res) => {
    res.render('about');
});

// render the contact.html file
app.get('/contact', (req, res) => {
    res.render('contact');
});