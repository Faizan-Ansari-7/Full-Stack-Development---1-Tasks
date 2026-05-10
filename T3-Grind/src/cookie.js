var expr = require("express")
var app = expr()
var cp = require('cookie-parser')
app.use(cp())
app.use(expr.static('../public', { index: 'cookie.html' }));
app.use(expr.urlencoded({extended : true}))
app.post("/next", (req, res, next) => {
    // const response= {
    // u:req.query.uname,
    // p:req.query.password }
    // res.cookie("uname",response.u)
    res.cookie("fname", req.body.fname)
    res.cookie("password", req.body.pwd)
    res.cookie("lname", req.body.lname)
    // Only for ref*
    //res.cookie("password", req.query.password ,{ secure: true, httpOnly: true })
    //always use true value when you want cookies to be created on an HTTPS s
    //secure origin.
    res.redirect("/admin"); // alternative of next()*
})
app.get("/admin", (req, res) => {
    res.clearCookie('lname');
    delete req.cookies.lname;
    res.write(" Welcome : " + req.cookies.fname);
    res.write(" Lname : " + req.cookies.lname);
    res.send()
});
app.listen(6959);