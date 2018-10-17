const express = require('express');
const router = express.Router();

// route  GET posts
// desc   Test users route
// access Public

router.get('/', (req, res) => {
    res.json({
        message: "it's works"
    });
});

module.exports = router;