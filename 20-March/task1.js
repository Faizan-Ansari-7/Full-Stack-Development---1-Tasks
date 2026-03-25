let fs = require('fs')
let url = require('url')

let addr = "https://localhost:8000/test?T1=25&T2=24&T3=25#ABC"

let q = url.parse(addr,true)
let data = q.query

process.noDeprecation = true
var sum = 0
for(let i in data){
    sum += Number(data[i])
}
let a = q.hash
let avg = (sum/75) * 100
fs.writeFile("result.txt","The Avg Of "+a.slice(1,)+" is :"+avg,(err) => {
    if(err) {
        console.log(err)
    }
    console.log("Data Added Successfully !")
})