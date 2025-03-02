import palindrome from "./util";
class Palindrome {
    constructor (str: String) {
        this.str = str.toLowerCase();
    }
    public isPalindrome(): Boolean {
        return true
    }

    private reverseString(): String {
        return ""
    }
}

// const palin = new Palindrome("TacoCat");
// console.log(palin.isPalindrome());

module.exports = Palindrome;