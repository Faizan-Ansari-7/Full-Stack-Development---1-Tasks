var expr = require('express')
var app = expr()

// app.get("/", (req, res) => {
//     res.set("content-type", "text/plain");
//     res.send("<h1>Hello</h1>");
// });
// app.get("/about", (req, res) => {
//     res.set("content-type", "text/html");
//     res.write("Hello");
//     res.send();
//     //res.write ("hello");
// });
// app.listen(5504, () => {
//     console.log("server started");
// })

// student = { name: "LJU", age: 28 }
// app.get("/", (req, res) => {
//     res.set("content-type", "application/json")
//     res.write(JSON.stringify(student))
//     res.send()
// })
// app.listen(6007)

// student = { name: "LJU", age: 28 }
// app.get("/", (req, res) => {
//     res.write(student.age + "") //needs to convert to string so appended string
//     res.send()
// })
// app.get("/j", (req, res) => {
//     res.send(student.age+"") //needs to convert to string so appended string
// })
// app.get("/j1", (req, res) => {
//     res.json(student.age)
// })
// app.listen(6001)

// student = {
//     u1: [{ name: "LJU", id: 2 },
//     { name: "LJU1", id: 3 },
//     { name: "LJU2", id: 4 },
//     { name: "LJU3", id: 5 },
//     { name: "LJU4", id: 6 }]
// }

// app.get('/',(req,res) => {
//     res.set('Content-Type','text/html')
//     res.write('<center><table border=1px cellspacing=2px, cellpadding=5px>')
//     res.write('<tr><th>Name</th><th>Id</th></tr>')
//     for(i of student.u1) {
//         res.write(`<tr><td>${i.name}</td>`)
//         res.write(`<td>${JSON.stringify(i.id)}</td></tr>`)
//     }
//     res.write('</table></center>')
//     res.send()
// })

// app.listen(6002)

// student = [{ name: "abc", age: 28 },
// { name: "def", age: 40 },
// { name: "xyz", age: 10 }]

// app.get('/',(req,res) => {
//     res.set('Content-Type','text/html')
//     res.send(student)
// })

// app.get('/sort',(req,res) => {
//     res.set('Content-Type','text/html')
//     const sort = student.sort((a,b) => b.age - a.age)
//     for(i of sort) {
//         res.write(`${i.name} -> ${i.age}<br>`)
//     }
//     res.send()
// })

// app.listen(6003)

// app.get('/flights/:from-:to', (req, res) => {
//     res.send(req.params);
// });
// app.listen(5000)

// app.get('/search', (req, res) => {
//     const name = req.query.name;
//     const age = req.query.age;
//     res.send("Name: " + name + ", Age: " + age);
// });


// app.use(expr.urlencoded({ extended: true }));
// app.post('/users', (req, res) => {
//     const name = req.body.name;
//     const age = req.body.age;
//     res.send("Name: " + name + ", Age: " + age);
// });

// app.get("/user/:id", (req, res) => {
//     const userId = req.params.id; // from URL path
//     const name = req.query.name; // from query string
//     const age = req.query.age;
//     res.json({
//         message: "Data received",
//         params: { id: userId },
//         query: { name, age } //JS shorthand {name} returns={name: req.query.name }
//     });
// });
// app.listen(3005, () => { console.log("Server running on port 3005"); });

// app.get("/", (req, res) => {
//     res.send(`<form action="/user" method="get">
// <input type="text" name="name" placeholder="Enter name" />
// <button type="submit">Create</button>
// </form>`);
// });
// // GET request
// app.get("/user", (req, res) => {
//     const name = req.query.name;
//     res.send("User created with name " + name);
// });
// // Start server
// app.listen(5504, () => { console.log("Server started on port 5504"); });

// app.use(expr.urlencoded({ extended: true }));
// // Homepage with form
// app.get("/", (req, res) => {
//     res.send(`<form action="/user" method="post">
// <input type="text" name="name" placeholder="Enter name" />
// <button type="submit">Create</button>
// </form>`);
// });
// // POST request
// app.post("/user", (req, res) => {
//     const name = req.body.name;
//     res.send("User created with name " + name);
// });
// // Start server
// app.listen(5504, () => { console.log("Server started on port 5504"); });

// const addName = (req, res, next) => {
//     req.name = "Samarth";
//     console.log("Name added");
//     next();
// };
// // Middleware 2: Add college name
// const addCollege = (req, res, next) => {
//     req.college = "LJ University";
//     console.log("College added");
//     next();
// };

// const addMarks = (req, res, next) => {
//     req.total = 50 + 40;
//     console.log("Marks calculated");
//     next();
// };
// // Route with middleware chain
// app.get("/student", addName, addCollege, addMarks, (req, res) => {
//     res.send("Student Name: " + req.name +
//         "<br>College: " + req.college +
//         "<br>Total Marks: " + req.total);
// });
// // Start server
// app.listen(6001, () => { console.log("Server running on port 6001"); });

const checkID = (req,res,next) => {
    const id = 123
    if(id === 123) {
        console.log("ID is valid");
        next()
    } else {
        res.send('Invalid ID')
    }
}

const checkName = (req,res,next) => {
    const name = 'Ronaldo'
    if(name === 'Ronaldo') {
        console.log("Name is valid");
        next()
    } else {
        res.send('Invalid Name')
    }
}

app.use('/class', checkID, checkName)
app.get('/class/data', (req,res) => {
    res.send('Welcome to the class!')
})
app.listen(6002, () => { console.log("Server running on port 6002"); });