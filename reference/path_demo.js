const path = require('path'); // core module so you don't have to download with npm install

// Base file name
console.log(path.basename(__filename));

// Directory name
console.log(path.dirname(__filename));

// File extensions
console.log(path.extname(__filename))

// Create path object
console.log(path.parse(__filename)) // gives path as an object

// Concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html'))