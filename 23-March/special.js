fs = require('fs')

const arr = [{name:"Rohit",runs:52},{name:"Kohli",runs:96},{name:"Gill",runs:20},{name:"Rahul",runs:33},{name:"Tilak",runs:30}]

fs.writeFileSync('score.txt', JSON.stringify(arr))
var a = fs.readFileSync('score.txt', 'utf-8')
console.log(JSON.parse(a))

arr.push({name:"Hardik",runs:52})
console.log(arr)
fs.writeFileSync('score.txt', JSON.stringify(arr))

let sum = 0
for(let i=0; i<arr.length; i++) {
    sum = sum + arr[i].runs
}
console.log("Total runs:", sum)

let runrate = sum / 20
console.log("Runrate:", runrate)

fs.appendFileSync('score.txt', "\nTotal runs: " + sum)
fs.appendFileSync('score.txt', "\nRunrate: " + runrate)
fs.appendFileSync('score.txt', "\nPlayers with more than 50 runs: ")
for(let i=0; i<arr.length; i++) {
    if(arr[i].runs > 50) {
        fs.appendFileSync('score.txt', "\n- " + arr[i].name)
        console.log(arr[i].name)
    }
}