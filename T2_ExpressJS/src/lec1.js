const express = require('express')
const app = express()
const port = 3000

// app.use(express.static('public'))

// app.get('/', (req, res) => {
//     console.log('Hello World!')
//     res.send('Hello World!')
// })

// app.post('/', (req, res) => {
//     console.log('Post method !')
//     res.send('Hey its post method')
// })

// app.get('/index', (req, res) => {
//     res.sendFile(__dirname + '/public/index.html')
//     // res.sendFile('index.html', {root : __dirname + '/public'})
// })

// app.get('/',(req,res) => {
//     res.json({
//         name : "Sukeona",
//         age : 22,
//         city : "Delhi"
//     })
// })


app.get('/',(req,res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

