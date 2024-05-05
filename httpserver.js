const http = require('http');
const fs = require('fs');
const port = 3000;

const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html')
    if(req.url == '/'){
        res.statusCode = 200;
        res.end('<h1> This is CodeWithHarry</h1> <p>Hello there!!</p>');
    }
    else if(req.url == '/hello'){
        res.statusCode = 200;
        const data = fs.readFileSync('index.html');
        res.end(data);
    }
    else{
        res.statusCode = 404;
        res.end('Error');
    }

})

server.listen(port,() => {
    console.log(`Server is listening on port ${port}`);
});