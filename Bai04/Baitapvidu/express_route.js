
const express = require('express');
const app = express();

// Route trang chu
app.get('/', (req, res) => {
    res.send('Trang chủ');
});

// Route trang gioi thieu
app.get('/about', (req, res) => {
    res.send('Trang giới thiệu');
});

// Route nhan tham so tu URL
app.get('/users', (req, res) => {
    const { name } = req.query;
    res.send(`Xin chào, ${name}`);
});

// Route mac dinh khi khong tim thay trang
app.use((req, res) => {
    res.status(404).send('Không tìm thấy trang');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
    console.log('http://localhost:3000');
});
