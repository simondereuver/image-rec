//Imports
const path = require('path');
const express = require('express');

//Route to motivational quotes
const quoteRouter = require('./routes/quoteRoutes');

//Create instance of express application
const app = express();

//Give access to client-side files
app.use(express.static(path.join(__dirname, '../Client')));

//Used to fetch the topnavbar into the different pages of website
app.get('/topnavbar.html', (req, res) => {
    //const filePath = path.join(__dirname, '../Client/topnavbar.html');
    res.sendFile('C:/work/image-rec-proj/Client/topnavbar.html');
});

//use the quotesRoute
app.use('/', quoteRouter);

module.exports = app; // Export the 'app' variable for unit-tests