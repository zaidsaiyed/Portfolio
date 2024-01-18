const express = require('express');

const app = express();

app.get('/', (req, res) => {
    console.log('Hello World!');
    // link it to the index.html
    res.sendFile(__dirname + '/index.html');
    }
);

app.listen(3000, () => console.log('Server is Ready\n http://localhost:3000'));