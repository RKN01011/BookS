import { SET_BOOKCHOSE } from "../hellpers/const.base";

let base = [];
let cheakBase = [];

class Bookcreat {
    constructor(id, price, img, quantity){
        this.name = id
        this.price = price * quantity
        this.img = img
    }
}

export async function set_book (name, price, img, quantity){
    if(cheakBase.indexOf(name) === -1) {
        cheakBase.push(name);
        base.push(new Bookcreat(name, price, img, quantity));
    }
    return{
        type: SET_BOOKCHOSE,
        payload: base,
    };
};

