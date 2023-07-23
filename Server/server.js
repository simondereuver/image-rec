//Imports
const path = require('path');
const http = require('http');
const fs = require('fs');
const express = require('express');
//const cors = require('cors');

//Create instance of express application
const app = express();

//Give access to client-side files
app.use(express.static(path.join(__dirname, '../Client')));

//app.use(cors());

//Used to fetch the topnavbar into the different pages of website
app.get('/topnavbar.html', (req, res) => {
    const filePath = path.join(__dirname, '../Client/topnavbar.html');
    res.sendFile('C:/work/image-rec-proj/Client/topnavbar.html');
});

//API endpoint for a random quote
app.get('/api/random-quote', (req, res) => {
    fs.readFile('./random-quotes.txt', 'utf8', (error, data) => {
        if (error) {
            //console.log(error);
            res.status(500).json({ error: 'Internal Server Error'});
            return;
        }
        const randomQuotesDocument = data.toString();
        const randomQuotes = randomQuotesDocument.split('\n'); //splits the text in document into substrings and each substring is an element in randomQuotes variable
        const randomIndex = Math.floor(Math.random() * randomQuotes.length);
        const randomQuote = randomQuotes[randomIndex].trim();

        console.log('***');
        console.log(randomQuote);
        console.log('***');

        res.json({ text: randomQuote});
    });
});

//Start server and listen to port 1337
const port = 1337;
app.listen(port,/* '192.168.1.11',*/ () => {
    //console.log('Server is running at http://192.168.1.11:${port}');
    console.log('Server is running at localhost:${port}');
});