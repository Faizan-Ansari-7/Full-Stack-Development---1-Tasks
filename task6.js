const arr = ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce']
const arr1 = 

function transformFirstAndLast(arr) {
    const obj = {}
    obj[arr[0]] = arr[arr.length-1]
    return obj
}

console.log(transformFirstAndLast(arr))