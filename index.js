// write your code here
var http = require('http');
// create a server object
http.createServer(function (req, res) {
//send response header to the request
res.writeHead(200, {'Content-Type': 'text/plain'});
res.end('Hello World');
}).listen(8080, '127.0.0.1');// listen to locally handled server for request
console.log('Server running at http://127.0.0.1:8080/');