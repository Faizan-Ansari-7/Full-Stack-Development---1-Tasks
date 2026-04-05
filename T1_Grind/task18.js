const fs = require('fs');
// Define two JSON objects
const division1 = {
    numbers: [2, 3, 4, 5, 6] // Base values
};
const division2 = {
    numbers: [3, 2, 1, 2, 3] // Power values
};
// Write initial objects to file
const initialData = {
    division1: division1,
    division2: division2
};
fs.writeFileSync('XYZ.txt', JSON.stringify(initialData, null, 2));
// Calculate result array (a^b)
let result = [];
for (let i = 0; i < division1.numbers.length; i++) {
    let base = division1.numbers[i];
    let power = division2.numbers[i];
    result.push(Math.pow(base, power));
}
// Append result to file
const resultData = "\n\nResult Array:\n" + JSON.stringify(result);
fs.appendFileSync('XYZ.txt', resultData);
// Display result on console
console.log("Result Array:", result);