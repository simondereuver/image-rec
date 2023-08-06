//Imports
const path = require('path');
const http = require('http');
const fs = require('fs');
const express = require('express');

//Create instance of express application
const app = express();

//Give access to client-side files
app.use(express.static(path.join(__dirname, '../Client')));

//Used to fetch the topnavbar into the different pages of website
app.get('/topnavbar.html', (req, res) => {
    const filePath = path.join(__dirname, '../Client/topnavbar.html');
    res.sendFile('C:/work/image-rec-proj/Client/topnavbar.html');
});

// Read the "random-quotes.txt" file and store quotes in memory during server startup
let randomQuotes = [];
fs.readFile('./Server/random-quotes.txt', 'utf8', (error, data) => {
    if (error) {
        console.log('Error reading file:', error);
        return;
    }
    const randomQuotesDocument = data.toString();
    randomQuotes = randomQuotesDocument.split('\n').map(quote => quote.trim());
});

// API endpoint for a random quote
app.get('/api/random-quote', (req, res) => {
    const randomIndex = Math.floor(Math.random() * randomQuotes.length);
    const randomQuote = randomQuotes[randomIndex];
    res.json({ text: randomQuote });
});

module.exports = app; // Export the 'app' variable for unit-tests