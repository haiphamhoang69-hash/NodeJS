
const express = require('express');
const app = express();

// Cau hinh Pug
app.set('view engine', 'pug');

// Route trang chu
app.get('/', (req, res) => {
    res.render('index', {
        name: 'John Doe'
    });
});

app.listen(3000, () => {
    console.log('Pug Server is running!');
    console.log('http://localhost:3000');
});
