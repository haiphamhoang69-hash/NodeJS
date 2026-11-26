
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Su dung body-parser de doc du lieu form
app.use(bodyParser.urlencoded({ extended: true }));

// Hien thi form
app.get('/', (req, res) => {
    res.send(`
        <h1>Division Calculator</h1>

        <form action="/divide" method="POST">
            <label>Dividend:</label>
            <input type="number" name="dividend" step="any" required>

            <br><br>

            <label>Divisor:</label>
            <input type="number" name="divisor" step="any" required>

            <br><br>

            <button type="submit">Submit</button>
        </form>
    `);
});

// Xu ly phep chia
app.post('/divide', (req, res, next) => {
    const { dividend, divisor } = req.body;

    const a = Number(dividend);
    const b = Number(divisor);

    // Kiem tra du lieu
    if (
        dividend === undefined ||
        dividend === '' ||
        divisor === undefined ||
        divisor === '' ||
        !Number.isFinite(a) ||
        !Number.isFinite(b) ||
        b === 0
    ) {
        const error = new Error('Invalid input');
        error.status = 400;
        return next(error);
    }

    res.send(`Result: ${a / b}`);
});

// Middleware xu ly loi
app.use((err, req, res, next) => {
    res.status(err.status || 500).send(err.message || 'Server Error');
});

app.listen(3000, () => {
    console.log('Error Handling Server is running!');
    console.log('http://localhost:3000');
});
