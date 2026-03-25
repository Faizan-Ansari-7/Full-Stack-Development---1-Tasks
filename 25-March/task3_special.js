http = require('http');

const priceOf1Stock = 50
const totalStocks = 100
const sellPrice = 40

const totalCost = priceOf1Stock * totalStocks;
const totalRevenue = sellPrice * totalStocks;
const profitLoss = totalRevenue - totalCost;

http.createServer((req,res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    let message = ""
    let color = ""
    if (profitLoss > 0) {
        message = `Profit: Rs. ${profitLoss}`;
        color = "green";
    } else if (profitLoss < 0) {
        message = `Loss: Rs. ${profitLoss}`;
        color = "red";
    } else {
        message = "No Profit, No Loss";
        color = "black";
    }
    res.write("<h1>Stock Market Analysis</h1>");
    res.write(`<p>Price of 1 Stock: Rs. ${priceOf1Stock}</p>`);
    res.write(`<p>Total Stocks: ${totalStocks}</p>`);
    res.write(`<p>Sell Price: Rs. ${sellPrice}</p>`);
    res.write(`<p>Total Cost: Rs. ${totalCost}</p>`);
    res.write(`<p>Total Revenue: Rs. ${totalRevenue}</p>`);
    res.end(`<h1 style="color: ${color};">${message}</h1>`);
}).listen(8000)
