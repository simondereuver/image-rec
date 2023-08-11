const app = require('./Server/server'); // Import the app and server from server.js

const port = 3000; // or the port number you want to use
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

// Additional configurations and setups to be added below

//Additional middleware and configurations

//Add database connection