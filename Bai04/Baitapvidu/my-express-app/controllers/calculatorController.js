
const express = require('express');
const router = express.Router();

const calculatorModel = require('../models/calculatorModel');

// Hien thi trang tinh toan
router.get('/', (req, res) => {
    res.render('calculator', {
        result: undefined,
        error: undefined
    });
});

// Xu ly phep tinh
router.post('/calculate', (req, res, next) => {
    const { num1, num2, operation } = req.body;

    try {
        const result = calculatorModel.calculate(
            num1,
            num2,
            operation
        );

        res.render('calculator', {
            result,
            error: undefined
        });
    } catch (error) {
        error.status = 400;
        next(error);
    }
});

module.exports = router;
