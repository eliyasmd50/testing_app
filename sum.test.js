const Sum = require("./sum");
// import Sum from "./sum.js";
// console.log(sumInstance.addition(2,4))

// test function for the js file
// ES6 module is not fully supported in jest
test('Add 2 + 3 amd gives 5 as a reslt', () => { 
    const sumInstance = new Sum();
    expect(sumInstance.addition(2, 3)).toBe(5)
 });