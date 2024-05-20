import { combineReducers } from "redux";

const setPower = (state = false, action) => {
  switch (action.type) {
    case "SET/POWER":
      return { state: action.payload };
    default:
      return state;
  }
};

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

export const reducer = combineReducers({
  power: setPower,
  display: setDisplay,
  volume: setVolume,
  bank: 0,
});
