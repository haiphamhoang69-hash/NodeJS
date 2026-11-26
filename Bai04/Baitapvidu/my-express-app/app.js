
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Import Controller
const calculatorController = require('./controllers/calculatorController');

// Cau hinh Pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Middleware xu ly du lieu
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware phuc vu file tinh
app.use(express.static(path.join(__dirname, 'public')));

// Su dung Router
app.use('/calculator', calculatorController);

// Middleware xu ly loi
app.use((err, req, res, next) => {
    console.error(err.message);
    res.status(err.status || 500).render('calculator', {
        result: undefined,
        error: err.message
    });
});

// Khoi dong server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log(`http://localhost:${port}/calculator`);
});
