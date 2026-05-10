const express = require('express');
const app = express();
const movieRoute = require('./router.js');

// Mounting the router. 
// If you use '/movies', then your paths become /movies and /movies/:id
app.use('/movies', movieRoute);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
