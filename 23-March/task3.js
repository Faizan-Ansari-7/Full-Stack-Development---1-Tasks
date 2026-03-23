var http = require('http');

http.createServer(function (req, res) {
    setTimeout(() => {
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write("Welcome To Priyen Sir's Class");
        res.end()
    }, 10000);
}).listen(8080)