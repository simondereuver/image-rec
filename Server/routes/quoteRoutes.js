const express = require('express');
const fs = require('fs');
const quoteRouter = express.Router();

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
quoteRouter.get('/api/random-quote', (req, res) => {
    const randomIndex = Math.floor(Math.random() * randomQuotes.length);
    const randomQuote = randomQuotes[randomIndex];
    res.json({ text: randomQuote });
});

module.exports = quoteRouter;