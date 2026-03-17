const array = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]

function fromListToObject(array) {
    const obj = {};
    for(let i=0; i<array.length; i++) {
        var new1 = array[i]
        obj[new1[0]] = new1[1]
    }
    return obj
}

console.log(fromListToObject(array))