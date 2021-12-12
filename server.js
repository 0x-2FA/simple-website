const express = require('express');
const path = require('path');

const app = express();

const port = 3000;

// get assets from the assets directory
app.use(express.static('assets'));

app.listen(port, () => {
    console.log(`Running on localhost:${port}`);
});

// render the index.html file
app.get('/', (req, res) =>{
    res.sendFile(path.resolve(__dirname, 'index.html'));
});
