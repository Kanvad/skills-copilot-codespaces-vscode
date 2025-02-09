// Create web server with express.js
// Run in terminal: node comments.js
// Load in browser: http://localhost:3000/
// Load in browser: http://localhost:3000/comments

const express = require('express');
const app = express();

// Set up a route to handle GET requests
app.get('/', (req, res) => {
    res.send('<h1>Welcome to the comments app</h1>');
});

app.get('/comments', (req, res) => {
    res.send('<h1>Comments</h1>');
});

// Start the server
app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});