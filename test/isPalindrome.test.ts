import Palindrome from "../src/isPalindrome";

test("Eliys will display as sayile", () => {
    expect(new Palindrome("Eliyas").reverseString()).toBe("sayile");
})

describe("palindrom test cases", () => {
    it("Eliyas returns false", () => {
        expect(new Palindrome("Eliyas").isPalindrome()).toBe(false);
    })
    it("BOB returns false", () => {
        expect(new Palindrome("BOB").isPalindrome()).toBe(true);
    })
})