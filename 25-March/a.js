//client side loading means that the js file will be loaded on the client side and not on the server side. This means that the js file will be loaded after the html file is loaded and rendered on the browser. This is useful for loading js files that are not essential for the initial rendering of the page, such as analytics or tracking scripts. It can also help to improve the performance of the page by reducing the amount of time it takes to load and render the page.

//server side loading means that the js file will be loaded on the server side and not on the client side. This means that the js file will be loaded before the html file is loaded and rendered on the browser. This is useful for loading js files that are essential for the initial rendering of the page, such as jQuery or React. It can also help to improve the performance of the page by reducing the amount of time it takes to load and render the page.

http = require('http');
// http.createServer((req,res) => {
//     res.writeHead(200,{'Content-Type':'text/html'})
//     res.write(`<html>
//         <body>
//         <p id=demo></p>
//         <script>
//         setTimeout(() => {
//             document.getElementById('demo').innerHTML = 'Welcome Student'},5000)
//         </script>
//         </body>
//         </html>`)
//     res.end()
// }).listen(5006)

http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(`<html>
        <body>
        <style>
        nav{
            background-color: #ffc800;
            display: flex;
            justify-content: space-around;
            padding: 10px;
        }
        a {
            color: black;
            text-decoration: none;
            font-size: 20px;
        }
        </style>
        <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
        </nav>
        </body>
        </html>`)
        res.end()
    } else if (req.url === '/about') {
        res.writeHead(301,{'location':'https://www.google.com'})
        res.end()
    } else if (req.url === '/contact') {
        res.write(`<h1>Contact Page</h1>
            <p>This is the Contact Page</p>`)
    } else {
        res.write('<h1>Page Not Found</h1>')
        res.end()
    }
    res.end()
}).listen(5006)

//res.writeHead(301,{'location':'https://www.google.com'})