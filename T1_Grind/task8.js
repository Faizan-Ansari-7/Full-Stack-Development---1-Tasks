var http = require('http');

http.createServer((req,res) => {
    if(req.url === '/') {
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write(`<h1>Welcome To Sir's Class</h1>`)
        const data = {'name':'abc','age':22}
        res.write(JSON.stringify(data))
        res.end()
    }
    else if(req.url === '/about') {
        res.writeHead(200,{'Conettn-Type':'text/html'})
        res.write(`<html>
            <head>
            <style>
            p {
            background-color : cyan;
            text-align : center;
            color : red
            }
            </style>
            </head>
            <body>
            <p>Welcome Broo !</p>
            </body>
            </html>`)
        res.end()
    } else {
        res.writeHead(404,{'Content-Type':'text/plain'})
        res.write('Not found !!')
        res.end()
    }
}).listen(3002)