var http = require('http')

http.createServer((req,res) => {
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write(`<html>
        <head>
            <title>Task 7</title>
        </head>
        <body>
            <h1>Task 7</h1>
            <p id="demo"></p>
        <script>
            let a = document.getElementById('demo')
            setTimeout(() => {
                a.innerHTML = "Welcome to Sir's Class"
                a.style.color = 'red'},2000) 
        </script>
        </body>
    </html>`)
    res.end()
}).listen(8081, () => {
    console.log('Server is running on port 8081')
})