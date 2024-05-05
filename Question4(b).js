const fs = require('fs');

// Create a readable stream from a file
const readableStream = fs.createReadStream('file2.txt', 'utf-8');

// Event handler for 'data' event
readableStream.on('data', (chunk) => {
    console.log('Received chunk of data:', chunk);
});

// Event handler for 'end' event
readableStream.on('end', () => {
    console.log('No more data to read.');
});

// Event handler for 'error' event
readableStream.on('error', (err) => {
    console.error('Error reading file:', err);
});
