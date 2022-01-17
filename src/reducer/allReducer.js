import { combineReducers } from "redux";
import listReducer from "./listReducer";


const allReducer = combineReducers({
    push: listReducer,
    
})

export default allReducer;