//Imports
const express = require('express');
const path = require('path');
const http = require('http');

//Create instance of express application
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

//Give access to client-side files
app.use(express.static(path.join(__dirname, '../Client')));

//Used to fetch the topnavbar into the different pages of website
app.get('/topnavbar.html', (req, res) => {
    const filePath = path.join(__dirname, '../Client/topnavbar.html');
    res.sendFile('C:/work/image-rec-proj/Client/topnavbar.html');
});

//Start server and listen to port 1337
const port = 1337;
app.listen(port, () => {
    console.log('Server is listening on port 1337');
});