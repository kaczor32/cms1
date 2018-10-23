const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

//Post model
const Post = require('../models/Post')

// Validation
const validatePostInput = require('../validation/post');

// route  GET posts
// desc   Test post route
// access Public
router.get('/', (req, res) => {
    res.json({
        message: "it's posts"
    });
});

// route  POST  /posts
// desc   Create post
// access Private

router.post('/', passport.authenticate('jwt', {
    session: false
}), (req, res) => {
    const {
        errors,
        isValid
    } = validatePostInput(req.body);

    //check validation
    if (!isValid) {
        // If any errors, send 400 with errors object
        return res.status(400).json(errors);
    }

    const newPost = new Post({
        text: req.body.text,
        name: req.body.name,
        avatar: req.body.avatar,
        user: req.body.user
    });
    newPost.save()
        .then(post => res.json(post));
});

module.exports = router;