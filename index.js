// Using module

// const path = require('path');
// const myFile = require('./myFile);

const uuid = require('uuid'); // This method is CommonJS
const Person = require('./person'); // Import our own module

const person1 = new Person("Furkan","Topaloğlu",27)

person1.greeting()


// Some of core node modules

const Logger = require('./logger');

const logger = new Logger();

logger.on('message', (data) => console.log('Called Listener : ',data));

logger.log('Hello World');
logger.log('How Are you');
logger.log('Hi');


const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if(req.url === '/'){

        fs.readFile(path.join(__dirname, 'public', 'index.html'),(err, content) => {
            res.writeHead(200, {'Content-type' : 'text/html'}) // write to headers.
            if(err) throw err;
            res.end(content)
        })
        
    }
    if(req.url === '/about'){

        fs.readFile(path.join(__dirname, 'public', 'about.html'),(err, content) => {
            res.writeHead(200, {'Content-type' : 'text/html'}) // write to headers.
            if(err) throw err;
            res.end(content)
        })
        
    }

    if(req.url === '/api/users'){ // We're creating REST Api
        const users = [
            {name: 'bob', age: 40},
            {name: 'john', age: 30}
        ]
        res.writeHead(200, {'Content-type' : 'text/json'}) // write to headers.
        res.end(JSON.stringify(users))
        
    }

    // Build file path
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);

    // Extension of file
    let extname = path.extname(filePath);

    // Initial content type
    let contentType = 'text/html';

    // Check ext and set content type
    switch(extname){
        case '.js':
             contentType = 'text/javascript';
             break;
        case '.css':
             contentType = 'text/css';
             break;
        case '.json':
             contentType = 'application/json';
             break;
        case '.png':
             contentType = 'image/png';
             break;
        case '.jpg':
             contentType = 'image/jpg';
             break;
    }

    // Read File
    fs.readFile(filePath, (err, content) => {
        if(err){
            if(err.code === 'ENOENT'){
                // Page not found
                fs.readFile(path.join(__dirname, 'public','404.html'), (err,content) => {
                    res.writeHead(200, {'Content-type' : contentType}) // write to headers.
                    res.end(content, 'utf8')
                })
            }
            else{
                // Some server error
                res.writeHead(500);
                res.end(`Server Error : ${err.code}`);
            }
        }
        // Success
        else{
            res.writeHead(200, {'Content-type' : contentType}) // write to headers.
            res.end(content,'utf8')
        }
    })
});

const PORT = process.env.PORT || 1773;

server.listen(PORT, () => console.log(`Server is running.... on ${PORT}`))