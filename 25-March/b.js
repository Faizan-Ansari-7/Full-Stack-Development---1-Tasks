http = require('http');
url = require('url');
fs = require('fs');

process.noDeprecation = true;

addr = 'http://localhost:8006/login';
q = url.parse(addr)
console.log(q.pathname.split('/')[1])
//console.log(q.pathname.split('/')[1])
//conosole.log(q.pathname).split('/').pop())

http.createServer((req,res) => {
    if(req.url == '/login'){
        res.writeHead(200,{'Content-Type':'text/html'})
        data = fs.readFileSync('25-March/login.html','utf-8')
        res.write(data)
        res.end()
    } else {
        res.writeHead(404,{'Content-Type':'text/html'})
        res.write('<h1>Page Not Found</h1>')
        res.end()
    }
}).listen(8006,() => {
    console.log('Server is running at http://localhost:8006')
})