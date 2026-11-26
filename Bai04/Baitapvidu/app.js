
const express = require('express');

// Tao ung dung Express
const app = express();

// Khai bao cong
const port = 3000;

// Tao route trang chu
app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

// Khoi dong server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log(`http://localhost:${port}`);
});
