var http = require('http')

var PORT = 1337

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end('Hello World!')
}).listen(PORT, '127.0.0.1')
console.log('Server running on port: ' + PORT)