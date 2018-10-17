const express = require('express');
const mongoose = require('mongoose');

const users = require('./routes/users');
const posts = require('./routes/posts');

const app = express();

//DB Config

const db = require('./config/keys').mongoURI;

// connect to mongodb
mongoose.connect(db, {
        useNewUrlParser: true
    })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

app.get('/', (req, res) => {
    res.send('dziala');
});

//use routes
app.use('/users', users);
app.use('/posts', posts);

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server is litening on port ${port}`));