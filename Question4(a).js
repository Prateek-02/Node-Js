const express = require('express');
const app = express();


// Middleware function to add a timestamp to the response header
const addTimestampHeader = (req, res, next) => {
    res.set('X-Timestamp', new Date());
    next();
};

// Register middleware functions
app.use(addTimestampHeader);

// Route handler
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
