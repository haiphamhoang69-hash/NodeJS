
const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');

const app = express();

// Cau hinh Handlebars
app.engine('handlebars', engine({
    layoutsDir: path.join(__dirname, 'views'),
    defaultLayout: false
}));

app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Route trang chu
app.get('/', (req, res) => {
    res.render('index', {
        title: 'My Express App',
        name: 'John Doe'
    });
});

app.listen(3000, () => {
    console.log('Handlebars Server is running!');
    console.log('http://localhost:3000');
});
