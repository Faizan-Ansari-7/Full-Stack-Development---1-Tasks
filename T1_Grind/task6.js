var http = require('http')

http.createServer((req,res) => {
    if(req.url === '/') {
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write('<h1>Home Page Bro !</h1>')
        res.write(req.url)
        res.end()
    } else if(req.url === '/about') {
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write('<h1>About Page Bro !</h1>')
        res.write(req.url)
        res.end()
    } else {
        res.writeHead(404,{'Content-Type':'text/plain'})
        res.write('404 Not Found Bro !')
        res.write(req.url)
        res.end()
    }
}).listen(3000, () => {
    console.log('Server is running on port 3000')
})