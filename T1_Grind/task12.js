const http = require("http");
const fs = require("fs");
const url = require("url");
const url1 =
    "https://www.google.com/exam1.txt?c1=Hello&c2=FSD2+T1+Test&c3=Welcome+to+LJU#AllTheBest";
const parsedUrl = url.parse(url1, true);
console.log(parsedUrl.pathname)
const c1 = parsedUrl.query.c1;
const c2 = parsedUrl.query.c2;
const c3 = parsedUrl.query.c3;
const hash = parsedUrl.hash;
const filename = "." + parsedUrl.pathname
const fileContent = c1 + "!\n" + c3 + " " + c2 + "\n" + hash;
console.log(c1)
console.log(c2)
console.log(c3)
console.log(parsedUrl.query)

process.noDeprecation = true

fs.writeFileSync(filename, fileContent);
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        data = fs.readFileSync(filename, "utf-8")
        res.writeHead(500, { "Content-Type": "text/html" });
        res.end("<h1 style='color:red'><pre>" + data + "<pre></h1>");
    }
    else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Page not found");
    }
});
server.listen(3000)