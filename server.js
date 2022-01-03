const express = require('express');
const ejs = require('ejs');
const path = require('path');
const body_parser = require('body-parser');

//const pool =  require("./model/db");
const pg = require('./model/db'); 

const app = express();

const port = 3000;

app.set('view engine', 'ejs');

app.use(body_parser.json());
app.use(body_parser.urlencoded({extended:true}));

// get assets from the assets directory
app.use(express.static('assets'));

app.listen(port, () => {
    console.log(`Running on localhost:${port}`);
});

// render the index.ejs file
app.get('/', (req, res) =>{
    pg.select_all(pg.pool, pg.table_posts).then( posts => {
        res.render('index', {posts});
    });
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

app.post('/post/articles', (req, res) => {
    pg.create_post(pg.pool, pg.table_posts, req.body.title, req.body.body);
    res.redirect('/');
});
