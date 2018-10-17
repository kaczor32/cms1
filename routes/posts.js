const express = require('express');
const router = express.Router();



// route  GET posts
// desc   Test post route
// access Public
router.get('/', (req, res) => {
    res.json({
        message: "it's posts"
    });
});



module.exports = router;