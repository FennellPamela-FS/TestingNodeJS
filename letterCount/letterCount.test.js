// requirements 
// write code that takes ina string and a character and 
// tells me how many times that character is in the string

// jest
// test suite and then you have test
// each of these takes in a title - describe or test
// and then a callback function - () => { };

const LetterCount = require('./letterCount');

// test suite - takes a title and a function
describe("As a user I want to test letterCount module", () => {
    // test - another title and then calls the callback function
    // to test this we have expectations and the actuals (meaning what we get back)
    // if both the expected and actual are the same then we pass the test
    test("Positive Letter test", () => {
        expect(LetterCount("awesome", 'e')).toBe(2);
    });

    test("Negative Letter test", () => {
        expect(LetterCount("hello", 'o')).not.toBe(2);
    });
});