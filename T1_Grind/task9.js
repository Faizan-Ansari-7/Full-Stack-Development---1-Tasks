const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    if (req.url === "/") {
        res.end(`
    <h1>Welcome to Home Page</h1>
    <a href="/about">About Us</a> <a href="/contact">Contact Us</a>
    `);
    } else if (req.url === "/about") {
        res.end(`<h1 style="color: blue; font-weight: bold;">Welcome to LJ University</h1>`);
    } else if (req.url === "/contact") {
        res.end(`<h2 style="color: red; font-style: italic;">Email: abc@ljinstitutes.edu.in</h2>`);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end("Page not found");
    }
});
server.listen(3000, () => { console.log("Server started"); });