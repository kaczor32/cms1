const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const users = require('./routes/users');
const posts = require('./routes/posts');

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

app.get('/', (req, res) => {
    res.json({
        message: 'main'
    });
});

//use routes
app.use('/users', users);
app.use('/posts', posts);

const port = process.env.PORT || 3030;

app.listen(port, () => console.log(`Server is listening on port ${port}`));