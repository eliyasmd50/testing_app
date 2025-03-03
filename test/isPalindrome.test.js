// import Palindrome from "../dist/isPalindrome";
const Palindrome = require("../dist/isPalindrome")

test("Tacocat returns true", () => {
    expect(new Palindrome("Tacocat").isPalindrome()).toBe(true);
})
test("Bell returns false", () => {
    expect(new Palindrome("Bell").isPalindrome()).toBe(false);
})




