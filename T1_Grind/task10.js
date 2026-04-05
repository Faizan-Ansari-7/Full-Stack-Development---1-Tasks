const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write('<h1 style="color:blue">Welcome to Log in page</h1>');
        res.end();
    }
    else if (req.url == "/login") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(`<form action="#" method="POST">
Username: <input type="text" name="username"><br><br>
Password: <input type="password" name="password"><br><br>
<input type="submit" value="Submit">
</form>`);
        res.end();
    }
    else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write("<h1>Page Not Found</h1>");
        res.end();
    }
});
server.listen(5001)