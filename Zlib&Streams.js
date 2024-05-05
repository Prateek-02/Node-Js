const fs = require('fs');
const zlib = require('zlib');

// Create a readable stream from a file
const readStream = fs.createReadStream('file.txt');

// Create a writable stream to a compressed file
const writeStream = fs.createWriteStream('output.txt.gz');

// Pipe the read stream through a gzip compressor to the write stream
readStream.pipe(zlib.createGzip()).pipe(writeStream);

console.log('File compressed successfully.');
