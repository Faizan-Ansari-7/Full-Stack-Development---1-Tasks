var expr = require('express')
var app = expr()

app.use(expr.static('../public', { index: 'task1.html' }))

app.get('/calc', (req, res) => {
    const a = parseInt(req.query.n1)
    const b = parseInt(req.query.n2)
    if (req.query.formula === 'addition') {
        const result = a + b
        res.send(`Result: ${result}`)
    } else if(req.query.formula === 'subtraction') {
        const result = a - b
        res.send(`Result: ${result}`)
    } else if(req.query.formula === 'multiplication') {
        const result = a * b
        res.send(`Result: ${result}`)
    } else if(req.query.formula === 'division') {
        if (b === 0) {
            res.send('Error: Division by zero is not allowed.')
        } else {
            const result = a / b
            res.send(`Result: ${result}`)
        }
    } else {
        res.send('Error: Invalid formula.')
    }
})
app.listen(3000, () => {
    console.log('Server is running on port 3000')
})