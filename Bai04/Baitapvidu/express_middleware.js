
const express = require('express');
const app = express();

// Dang ky Middleware
app.use((req, res, next) => {
    console.log(`Yêu cầu đến địa chỉ: ${req.url}`);
    next();
});

// Route trang chu
app.get('/', (req, res) => {
    res.send('Chào mừng đến với ứng dụng Express!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
    console.log('http://localhost:3000');
});
