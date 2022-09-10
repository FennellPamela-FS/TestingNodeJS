// requirements
// test with Jest
// testing with Math Object

const { add, subtract, multiply, divide, squareRoot, maxValue } = require('./myMath');

describe("As a user I want to test with the Math Object", () => {
    // add
    test("Test the sum of two numbers", () => {
        const a = 2;
        const b = 5;
        expect(add(a, b)).toBe(7);
    });

    // subtract
    test("Test the difference of two numbers", () => {
        const a = 5;
        const b = 2;
        expect(subtract(a, b)).toBe(3);
    });

    // multiply
    test("Test the multiplication of two numbers", () => {
        const a = 10;
        const b = 5;
        expect(multiply(a, b)).toBe(50);
    });

    // divide
    test("Test the division of two numbers", () => {
        const a = 10;
        const b = 5;
        expect(divide(a, b)).toBe(2);
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