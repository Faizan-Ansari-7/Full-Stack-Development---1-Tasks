fs = require('fs')
url = require('url')
http = require('http')

const url1 = 'https://www.google.com/exam.txt?c1=Hello&c2=FSD2T1Test&c3=WelcometoLJU#AllTheBest'
process.noDeprecation = true

const q = url.parse(url1, true)
console.log(q.pathname)

const c1 = q.query.c1
const c2 = q.query.c2
const c3 = q.query.c3

const hash = q.hash
const fname = "."+q.pathname

const fcon = c1 + "!\n" + c2 + "!\n" + c3 + "!\n"

fs.writeFileSync(fname,fcon)
const server = http.createServer((req,res) => {
    data = fs.readFileSync(fname,"utf-8")
    if(req.url == "/"){
        res.writeHead(200,{"Content-Type":"text/html"})
        res.write("<h1 style='color:red'><pre>"+data+"</pre></h1>")
        res.end()
    } else {
        res.writeHead(404,{"Content-Type":"text/html"})
        res.write("<h1 style='color:red'>404 Not Found</h1>")
        res.end()
    }
})
server.listen(6008)