const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('dziala');
});

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server is litening on port ${port}`));