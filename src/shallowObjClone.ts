import Person from "./util/util";

class ShallowObjClone {
    public shallowClone(obj: Person) {
        return { ...obj }
    }
}

module.exports = ShallowObjClone;