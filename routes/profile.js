const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

//load profile model

const Profile = require('../models/Profile');

//load User profile

const User = require('../models/User');


// route  GET profile
// desc   Test post route
// access Public
// router.get('/', (req, res) => {
//     res.json({
//         message: "it's posts"
//     });
// });

// route  GET profile
// desc   get current users profile
// access Private
router.get('/', passport.authenticate('jwt', {
    session: false
}), (req, res) => {
    const errors = {};
    Profile.findOne({
            user: req.user.id
        })
        .then(profile => {
            if (!profile) {
                errors.noprofile = 'There is no profile for this user';
                return res.status(404).json(errors);
            }
            res.json(profile);
        })
        .catch(err => res.status(404).json(err))
})



module.exports = router;