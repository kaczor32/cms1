const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');


const users = require('./routes/users');
const posts = require('./routes/posts');
const profile = require('./routes/profile');

const app = express();



//body parser middleware
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());


//DB Config

const db = require('./config/keys').mongoURI;

// connect to mongodb
mongoose.connect(db, {
        useNewUrlParser: true
    })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

//passport middelware
app.use(passport.initialize());

//passport config
require('./config/passport')(passport);


//use routes
app.use('/users', users);
app.use('/posts', posts);
app.use('/profile', profile);

const port = process.env.PORT || 3030;

app.listen(port, () => console.log(`Server is listening on port ${port}`));