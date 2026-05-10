const expr = require("express");
const app = expr();
const sess = require("express-session");
app.use(sess({
    resave: false,
    saveUninitialized: false,
    secret: "psp123"
}));
app.get("/", (req, res) => {
    if (req.session.page_views) {
        req.session.page_views++;
        res.send(`<h1 style="color:blue;"> You have visited page ${req.session.page_views} times <h1>`);
    }
    else {
        req.session.page_views = 1,
        res.send(`<h1 style="color:green;"> Welcome! Thank you for visiting our website!<h1>`);
    }
});
app.listen(8003, () => {
    console.log("server running at 8003");
});