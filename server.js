const express = require('express');

const app = express();

app.get('/', (req, res) => {
    // link it to the index.html
    res.sendFile(__dirname + '/index.html');
    }
);

app.listen(3000, () => console.log('\n************************\nServer is Ready\nhttp://localhost:3000'));