// requirements
// test with Jest
// testing with Math Object

const { squareRoot, maxValue } = require('./myMath');

describe("As a user I want to test with the Math Object", () => {
    // add
    test("Test the sum of two numbers", () => {
        const a = 2;
        const b = 5;
        const results = a + b;
        expect(results).toBe(7);
    });

    // subtract
    test("Test the difference of two numbers", () => {
        const a = 2;
        const b = 5;
        const results = b - a;
        expect(results).toBe(3);
    });

    // divide
    test("Test the division of two numbers", () => {
        const a = 10;
        const b = 5;
        const results = a / b;
        expect(results).toBe(2);
    });

    // multiply
    test("Test the multiplication of two numbers", () => {
        const a = 10;
        const b = 5;
        const results = a * b;
        expect(results).toBe(50);
    });

    // square root
    test("Test the square root Math Object", () => {
        const a = 25;
        expect(squareRoot(a)).toBe(5);
    });

    // max 
    test("Test the max Math Object", () => {
        const a = 50;
        const b = 25;
        const c = a + b;
        expect(maxValue(a, b, c)).toBe(75);
    });

});






