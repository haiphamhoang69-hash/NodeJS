
const calculatorModel = {
    calculate: (num1, num2, operation) => {
        const a = parseFloat(num1);
        const b = parseFloat(num2);

        if (!Number.isFinite(a) || !Number.isFinite(b)) {
            throw new Error('Invalid input');
        }

        switch (operation) {
            case 'add':
                return a + b;

            case 'subtract':
                return a - b;

            case 'multiply':
                return a * b;

            case 'divide':
                if (b === 0) {
                    throw new Error('Cannot divide by zero');
                }
                return a / b;

            default:
                throw new Error('Invalid operation');
        }
    }
};

module.exports = calculatorModel;
