fs = require('fs')
let url = require('url')
let addr =
  "https://www.google.com/search?q=good+morning&oq=good+morning&gs_lcrp=EgZjaHJvbWUqDQgAEAAYgwEYsQMYgAQyDQgAEAAYgwEYsQMYgAQyCggBEAAYsQMYgAQyCggCEAAYsQMYgAQyCggDEAAYsQMYgAQyBwgEEAAYgAQyCggFEAAYsQMYgAQyCggGEAAYsQMYgAQyBwgHEAAYgAQyCggIEAAYsQMYgAQyCggJEAAYsQMYgATSAQgxODc5ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8";

process.noDeprecation = true
let data = new URL(addr)
let a = data.hostname
var output = `User Search ${data.searchParams.get("q")} on ${a.slice(4,14)}`
fs.writeFile("output.txt",output,(err) => {
    if(err) {
        throw err
    }
    console.log("Open This File output.txt")
})