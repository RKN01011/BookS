import { SET_BOOKCHOSE } from "../component/hellpers/const.base";


const statestore = [[]];

export default function basket (state = statestore, action){
    switch(action.type){
        case SET_BOOKCHOSE:
        return [action.payload];
        default:
        return state;
    }
}

export {statestore};