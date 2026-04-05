fs = require('fs');

const shape = [{ name: "circle", diameter: 8 }, { name: "square", side: 10 }]

fs.writeFileSync('shapes.txt', JSON.stringify(shape))
var data = fs.readFileSync('shapes.txt', 'utf-8')
data1 = JSON.parse(data)

if (data1[0].name === "circle") {
    var peri1 = data1[0].diameter / 2 * 3.14 * 2
    console.log("Perimeter of circle is " + peri1)
}
if (data1[1].name === "square") {
    var peri2 = data1[1].side * 4
    console.log("Perimeter of square is " + peri2)
}

fs.appendFileSync('shapes.txt', '\nPerimeter of circle is ' + JSON.stringify(peri1) + '\nPerimeter of square is ' +
    JSON.stringify(peri2))
