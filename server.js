const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello world!');
    }
);
console.log("Hello World!!")
app.listen(3000, () => console.log('Server is Ready/n http://localhost:3000'));
