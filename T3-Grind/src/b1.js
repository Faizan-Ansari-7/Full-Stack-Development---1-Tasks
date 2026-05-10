var expr = require('express')
var app = expr()
var cp = require('cookie-parser')

app.use(cp())

app.get('/',(req,res) => {
    res.cookie('name','siuu')
    res.cookie('age',20)
    res.cookie('ID',123456,{expires : new Date(Date.now() + 10000)})
    res.cookie('email','abcd@gmail.com',{maxAge : 8000})
    res.send('Cookies are set')
})

app.get('/getcookies',(req,res) => {
    res.write(req.cookies.name)
    res.write(req.cookies.age.toString())
    res.send()
})

app.listen(3000,() => {
    console.log('Server is running on port 3000')
})