fs = require('fs')

const a = [['Country', 'India'], ['State', 'Gujarat'], ['City', 'Ahmedabad']]

function ArrayToObject(arr) {
    var obj = {}
    for(i=0; i<arr.length; i++) {
        var new1 = arr[i]
        obj[new1[0]] = new1[1]
    }
    fs.writeFileSync('arraytoobject.txt',JSON.stringify(obj))
    return obj
}
console.log(ArrayToObject(a))