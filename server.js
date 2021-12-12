const express = require('express');
const path = require('path');

const app = express();

const port = 3000;

// path to all the views (html files)
const views = '/views'

// get assets from the assets directory
app.use(express.static('assets'));

app.use(express.static('views'));

app.listen(port, () => {
    console.log(`Running on localhost:${port}`);
});

// render the index.html file
app.get('/', (req, res) =>{
    res.sendFile(path.resolve(__dirname + views, 'index.html'));
});

// render the about.html file
app.get('/about', (req, res) => {
    res.sendFile(path.resolve(__dirname + views, 'about.html'));
});

// render the contact.html file
app.get('/contact', (req, res) => {
    res.sendFile(path.resolve(__dirname + views, 'contact.html'));
});