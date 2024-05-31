import { combineReducers } from "redux";

// Función de orden superior para crear setters de estado
const createSetter = (actionType) => (state = false, action) => {
  switch (action.type) {
    case actionType:
      return { state: action.payload };
    default:
      return state;
  }
};

// Usamos la función de orden superior para crear los setters
const setPower = createSetter("SET/POWER");
const setBank = createSetter("SET/BANK");

// Otros setters
const setDisplay = (state = "Press any key", action) => {
  switch (action.type) {
    case "SET/DISPLAY":
      return action.payload;
    default:
      return state;
  }
};

const setVolume = (state = 30, action) => {
  switch (action.type) {
    case "SET/VOLUME":
      return action.payload;
    default:
      return state;
  }
};

// Combinamos todos los reducers en uno solo
export const reducer = combineReducers({
  power: setPower,
  display: setDisplay,
  volume: setVolume,
  bank: setBank,
});
