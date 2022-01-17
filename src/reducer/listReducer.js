import { dataUser } from "../dataUser"
import { IamMan } from "../dataUser"

const listReducer = (state = [], action) => {
    
switch(action.type) {
    case 'PUSH':
        let rndNumb = Math.floor(Math.random() * dataUser.length)
        console.log(state)
        return [...state, dataUser[rndNumb]];
    case 'PUSHME':
        let copy = Object.assign({}, IamMan)
        return  [...state, copy]
        default:
            return state;
}
}
export default listReducer;