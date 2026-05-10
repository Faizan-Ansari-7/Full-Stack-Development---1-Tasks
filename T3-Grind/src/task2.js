var expr = require('express');
var app = expr()
var cp = require('cookie-parser')

app.use(cp())
app.use(expr.static('../public', { index: 'task2.html' }))
app.use(expr.urlencoded({ extended: true }))

app.post('/feedback', (req, res) => {
    const { name, email, message, rating } = req.body
    const feedback = { name, email, message, rating }
    res.cookie('feedback', feedback, { maxAge: 10000 })
    res.send(`Feedback received <a href="/feedback-details">View Feedback</a>`)
})

app.get('/feedback-details', (req, res) => {
    const feedback = req.cookies.feedback
    if (feedback) {
        res.send(`Feedback Details:<br>Name: ${feedback.name}<br>Email: ${feedback.email}<br>Message: ${feedback.message}<br>Rating: ${feedback.rating}`)
    } else {
        res.send('No feedback found.')
    }
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})