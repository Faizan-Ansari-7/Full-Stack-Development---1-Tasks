fs = require('fs');
var x = {'data':{'a':15,'b':20,'c':[40,30]}}

fs.writeFile('nodejs_task/input.txt',JSON.stringify(x),(err) => {
    if(err) throw err;
    console.log('File created successfully');
    var add = x.data.a + x.data.b;
    var sub = x.data.c[1] - x.data.b
    var mul = x.data.c[0] * x.data.c[1]
    fs.appendFile('nodejs_task/output.txt',`Addition: ${add}\nSubtraction: ${sub}\nMultiplication: ${mul}`, (err) => {
        if(err) throw err;
        console.log('Data appended successfully');
    })
})