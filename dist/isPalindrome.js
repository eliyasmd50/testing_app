"use strict";
class Palindrome {
    // to declare the varibale with the type definintion
    constructor(str) {
        this.str = str.toLowerCase();
    }
    isPalindrome() {
        return this.str === this.reverseString();
    }
    reverseString() {
        const strToReverse = this.str.split("").reverse().join("");
        // console.log(strToReverse);
        return strToReverse;
    }
}
// const palin = new Palindrome("HannaH");
// console.log(palin.isPalindrome());
module.exports = Palindrome;
