// File System Module
const fs = require('fs');
const path = require('path');

/*

most of fs' methods are async so they take callback

*/

// Create a folder --> mkdir(filename, {optional}, callback)
/* fs.mkdir(path.join(__dirname,'/test'), {}, function(err){
    if(err) throw err;
    console.log('Folder created...')
})

// Create and write to file
fs.writeFile(path.join(__dirname,'/test', 'hello.txt'), 'Hello World!', function(err){
    if(err) throw err;
    console.log('File created and written to...')
})


fs.appendFile(path.join(__dirname,'/test', 'hello.txt'), 'I love node jsss', function(err){
    if(err) throw err;
    console.log('File created and written to...')
})
 */


 // Read File
 fs.readFile(path.join(__dirname,'/test','hello.txt'), 'utf8', function(err, data){
    if(err) throw err;
    console.log(data)
 })

 // Rename a file
 fs.rename(path.join(__dirname,'/test','hello.txt'), path.join(__dirname,'/test','helloworld.txt'), function(err){
    if(err) throw err;
    console.log('File renamed')
 })