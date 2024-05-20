import { combineReducers } from "redux";
// import Display from "../Display";
// import { songs } from "./ButtonCreator";

const powerReducer = (state = true, action) => {
    switch (action) {
        case 'SET/POWER':
            // return state !== state;
            break;
    
        default:
            return state;
    }
}

export const displayReducer = (state = "Press any key", action) => {
    switch (action) {
        case 'SET/DISPLAY':
            return action.payload ;
    
        default:
            return state;
    }
}

export const reducer = combineReducers({
    power: powerReducer,
    display: displayReducer,
    volume: 40,
    bank: 0,
});
