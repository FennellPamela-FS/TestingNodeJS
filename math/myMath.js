// add function 
const add = (a, b) => { return a + b };

// subtract function
const subtract = (a, b) => { return a - b };

// multiply function
const multiply = (a, b) => { return a * b };

// divide function
const divide = (a, b) => { return a / b };

// square root
const squareRoot = (a) => Math.sqrt(a);

// max 
const maxValue = (a, b, c) => Math.max(a, b, c);

module.exports = {
    add,
    subtract,
    multiply,
    divide,
    squareRoot,
    maxValue
};