const { uppercase, lowercase } = require("./string");

describe("Testing the string module", () => {

    test("Should uppercase  string input", () => {
        expect(uppercase("bob")).toBe("BOB");
    });

    test("Should lowercase string input", () => {
        expect(lowercase("FULL Sail")).toBe("full sail");
    });

});

