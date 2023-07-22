//Imports
const path = require('path');
const http = require('http');
const fs = require('fs');
const express = require('express');

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

        res.json({ text: randomQuote});
    });
});

//Start server and listen to port 1337
const port = 1337;
app.listen(port, () => {
    console.log('Server is listening on port 1337');
});