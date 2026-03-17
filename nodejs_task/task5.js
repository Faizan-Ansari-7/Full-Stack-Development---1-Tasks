fs = require('fs');
var arr = [22, 23, -2, 34, 56, 89, 11, 28, -11, -33];
fs.writeFileSync('nodejs_task/b.txt', arr.join(' '));
fs.appendFileSync('nodejs_task/b.txt', ('\nSorted Array :' + arr.sort((a, b) => a - b).join(' ')));
fs.appendFileSync('nodejs_task/b.txt', ('\nMaximum Value :' + Math.max(...arr)));