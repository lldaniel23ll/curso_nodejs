const express = require('express');
const colors = require('colors');
const server=express();
server.get('/', function(req, res){
    res.send('<h1>hola mundo</h1>');
    res.end();
});
server.listen(3000,function(){
    console.log('serer on port 3000'.red);
});
/*
const http = require('http');
const colors = require('colors');

const handleServer = function(req, res){
    res.writeHead(200, { 'Content-type': 'text/html' })
    res.write('<h1>Hola Mundo</h1>');
    res.end();
}
const server = http.createServer(handleServer);
server.listen(3000, function(){
    console.log('Server on port 3000'.yellow);
});

const fs = require('fs');
fs.readFile('./text.txt', function(err, data){
    if(err){
        console.log(err);
    }
    console.log(data.toString());
});
fs.writeFile('./text.txt', 'este es un texto', function(err){
    if(err){
        console.log(err);
    }
    console.log('archivo creado');
});

const os = require('os');
console.log(os.platform());
console.log(os.release());
console.log('free memory', os.freemem(), 'bytes');
console.log('total memory', os.totalmem(), 'bytes');
*/