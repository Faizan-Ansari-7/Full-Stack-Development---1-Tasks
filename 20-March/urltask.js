var u = require('url')
let addr = "http://localhost:8000/default.html?year=2026&month=March#warupdate"

process.noDeprecation = true //no to use anywhere , just to hide the warning !

var q = u.parse(addr,true) //true - converts the objects !
// console.log(q)
// console.log(q.post)
// console.log(q.query)
// console.log(q.search)

let data = q.query;
console.log(data);

if((data.year % 400 == 0) && (data.year%4 == 0 || data.year%100 != 0)){
    console.log("Leap year")
}
else{
    console.log("Not Leap Year")
}


//[Protocol :// sub-domain . main-domian . top-level-domain : port] / path ? query separator #id
