let addr = "http://localhost:8000/default.html?year=2026&month=March#warupdate";

let q = new URL(addr)
// console.log(q)

let data = q.query
console.log(data)
console.log(data.year)