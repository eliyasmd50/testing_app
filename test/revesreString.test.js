const Palindrome = require("../dist/isPalindrome");

test("Reverse any string", () => {
    expect(new Palindrome("Bobby").reverseString()).toBe("ybbob");
})