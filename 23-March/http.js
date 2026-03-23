const http = require('http')
fs = require('fs')
// let server = http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'text/html'})
//     res.write("Hii")
//     res.write("<h1> Hello Server </h1>")
//     res.write("How are you ??")
//     res.end()
// })
// server.listen(6002,() => {
//     console.log('Server Connected')
// })

// const obj = {name:"Rohit",runs:99}
// let server = http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'application/json'})
//     res.write(JSON.stringify(obj))
//     res.end()
// })
// server.listen(6002,() => {
//     console.log('Server Connected')
// })

// http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'application/json'})
//     let obj = {name:"Rohit",runs:99}
//     res.write(JSON.stringify(obj))
//     res.end()
// }).listen(6002)

// http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'text/html'})
//     res.write(req.url+"<br>")
//     res.end("Url Fetched")
// }).listen(3006)

// http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'text/html'})
//     res.write('<h1>Hello</h1><img src="asus rog 9 pro.jpg" alt="Image">')
//     res.end()
// }).listen(3006)

// http.createServer((req, res) => {
//     if(req.url == "/") {
//         res.writeHead(200, {'Content-Type': 'text/html'})
//         res.write('<h1>Hello</h1>')
//         res.end()
//     }
//     else if(req.url == "/about") {
//         res.writeHead(200, {'Content-Type': 'text/plain'})
//         res.write('<h1>About Us</h1>')
//         res.end()
//     }
//     else {
//         res.writeHead(404, {'Content-Type': 'text/html'})
//         res.write('<h1>Page Not Found</h1>')
//         res.end()
//     }
// }).listen(3006)

http.createServer((req, res) => {
    if(req.url === "/") {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write('<h1>Hello</h1>')
        res.end()
    } else if(req.url === "/asus.jpg") {
        data = fs.readFileSync('asus rog 9 pro.jpg')
        res.writeHead(200, {'Content-Type': 'image/jpeg'})
        res.write(data)
        res.end()
    } else if(req.url === "/task4x") {
        data = fs.readFileSync('task4.html')
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(data)
        res.end()
    }
    else {
        res.writeHead(404, {'Content-Type': 'text/html'})
        res.write('<h1>Page Not Found</h1>')
        res.end()
    }
}).listen(3006)