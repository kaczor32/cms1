const express = require('express');
const mongoose = require('mongoose');

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

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server is litening on port ${port}`));