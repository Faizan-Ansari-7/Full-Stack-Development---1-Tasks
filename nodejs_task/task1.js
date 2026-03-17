fs = require('fs')
fs.readFile('nodejs_task/a.txt', 'utf8',(err, data) => {
    if (err) {
        console.log(err)
        return;
    } 
    const dataArr = data
    .trim()
    .split(/\s+/)
    .map(Number)
    .sort((a, b) => a - b)
    console.log(dataArr)
})