const ShallowObjClone = require("../dist/shallowObjClone");

test("create a clone for the obj parameter", () => {
    const myObj = {name : "ELiyas", age : 25};
    expect(new ShallowObjClone().shallowClone(myObj)).toStrictEqual(myObj);
})