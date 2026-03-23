var http = require('http');

http.createServer(function (req, res) {
    if (req.url === "/home") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>Hello World</h1>');
        res.end();
    } else if (req.url === "/about") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>About Us</h1>');
        res.end();
    } else if (req.url === "/contact") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>Contact Us</h1>');
        res.end();
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.write('Page Not Found');
        res.end();
    }
}).listen(8080) 