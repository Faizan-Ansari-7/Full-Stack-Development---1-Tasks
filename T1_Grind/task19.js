const http = require('http');
// Create server
const server = http.createServer((req, res) => {
    // Check route
    if (req.url === '/api') {
        // Set header for JSON response
        res.writeHead(200, { 'Content-Type': 'application/json' });
        // Create JSON object
        const data = {
            name: "Rahul",
            course: "NodeJS",
            status: "Enrolled"
        };
        // Send JSON response
        res.end(JSON.stringify(data));
    }
    else {
        // Handle other routes (404)
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end("404 - Page Not Found");
    }
}).listen(3011)