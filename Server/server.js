//Imports
const express = require('express');
const path = require('path');
const http = require('http');
//create instance of express application
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.use(express.static(path.join(__dirname, '../Client')));

app.get('/topnavbar.html', (req, res) => {
    const filePath = path.join(__dirname, '../Client/topnavbar.html');
    res.sendFile('C:/work/image-rec-proj/Client/topnavbar.html');
});

//start server and listen to port 1337
const port = 1337;
app.listen(port, () => {
    console.log('Server is listening on port 1337');
});