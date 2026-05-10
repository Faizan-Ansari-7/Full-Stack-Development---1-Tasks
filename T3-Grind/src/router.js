const express = require('express'); // Use const for imports
const router = express.Router();

const mvi = [
    { id: 101, name: 'DON-1', Year: 2013, rating: 9.5 },
    { id: 102, name: 'DON-2', Year: 2016, rating: 9.5 },
    { id: 103, name: 'DON-3', Year: 2023, rating: 100 }
];

// This will be accessible at /movies/ (depending on your app.use path)
router.get('/', (req, res) => {
    res.json(mvi);
});

// GET movie by ID
router.get('/:id', (req, res) => {
    // find() is more efficient than filter() for a single item
    const movie = mvi.find((m) => m.id === parseInt(req.params.id));
    
    if (movie) {
        res.send(movie);
    } else {
        res.status(404).send('Movie not found');
    }
});

module.exports = router;
