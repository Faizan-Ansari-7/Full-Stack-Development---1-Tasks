var expr = require('express');
var app = expr();
var multer = require('multer')
var path = require('path')

app.use(expr.static('../public',{index: 'task4.html'}))
app.use(expr.static('../public',{index: 'effect.css'}))
app.use(expr.urlencoded({extended: true}))

var store = multer.diskStorage({
    destination : 'File/',
    filename : (req,file,cb) => {
        cb(null,file.fieldname + '-file' + path.extname(file.originalname))
    }
})

var upload = multer({storage : store})

app.post('/upload',upload.single('data'),(req,res) => {
    res.send(`<link rel="stylesheet" href="effect.css"><h1 class="result-map">File Uploaded Successfully ${req.file.filename}</h1>`)
})

app.listen(3000,() => {
    console.log('Server is running on port 3000')
})