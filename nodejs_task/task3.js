fs = require('fs');
const shape = [{ name: "circle", diameter: 8 }, { name: "square", side: 10 }]

fs.writeFile('nodejs_task/shape.txt',JSON.stringify(shape), (err) => {
    if(err) {
        console.log(err);
    }
    var peri = 4 * shape[1].side;
    console.log(peri);
    var peri1 = 2 * 3.14 * (shape[0].diameter/2);
    console.log(peri1);
    fs.appendFile('nodejs_task/shape.txt', `\nPerimeter of square is ${peri} and perimeter of circle is ${peri1}`, (err) => {
        if(err) {
            console.log(err);
        }
    })
})