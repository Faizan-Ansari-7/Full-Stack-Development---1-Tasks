const http = require('http')
let server = http.createServer((req, res) => {
    res.write("<h1> Hello Server </h1>")
    res.end()
})
server.listen(6008,() => {
    console.log('Server Connected')
})