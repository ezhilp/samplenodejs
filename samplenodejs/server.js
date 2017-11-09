var http = require('http');
var circle = require('./app/circle.js');

var server = http.createServer(function(req, res) {

res.writeHead(200);

res.end('Hi everybody!');

});

console.log(`The area of a circle of radius 4 is ${circle.area(4)}`);

server.listen(8080);
