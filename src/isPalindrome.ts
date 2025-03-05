class Palindrome  {
    str: string;

    // to declare the varibale with the type definintion
    public constructor (str: string) {
        this.str = str.toLowerCase();
    }

    public isPalindrome(): Boolean {
        return this.str === this.reverseString();
    }

    public reverseString(): String {
        const strToReverse: String = this.str.split("").reverse().join("")
        // console.log(strToReverse);
        return strToReverse;
    }
}

// const palin = new Palindrome("HannaH");
// console.log(palin.isPalindrome());

// module.exports = Palindrome;
export default Palindrome;