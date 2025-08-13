const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello, Express from scratch!');
});


router.post('/data', (req, res) => {
    const { name } = req.body;
    res.json({ message: `Hello ${name}, your data was received!` });
});

module.exports = router;