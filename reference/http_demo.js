// HTTP Reference

const http = require('http');

// Create a server object
http.createServer((req, res) => {
    // Write response
    res.write('Hello World!');
    res.end() // Ending server
}).listen(1773, () => console.log('Server running....'))