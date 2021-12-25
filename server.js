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

// render the index.ejs file
app.get('/', (req, res) =>{
    res.render('index');
});

// render the about.ejs file
app.get('/about', (req, res) => {
    res.render('about');
});

// render the contact.ejs file
app.get('/contact', (req, res) => {
    res.render('contact');
});

// render the new_post.ejs file
app.get('/new_post', (req, res) => {
    res.render('new_post');
});