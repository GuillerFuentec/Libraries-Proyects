import {
  ADD,
  CLEAR,
  DIVIDE,
  EQUALS,
  MULTIPLY,
  SUBTRACT,
  INPUT_DECIMAL,
  INPUT_NUMBER,
} from "./actions/actions";

const initialState = {
  displayValue: "0",
  operator: null,
  previousValue: null,
  waitingForNewValue: false,
};

export const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR:
      return {
        displayValue: "0",
        operator: null,
        previousValue: null,
        waitingForNewValue: false,
      };
    case ADD:
      if (state.waitingForNewValue) {
        return { ...state, operator: "+" };
      } else {
        return {
          ...state,
          previousValue: state.displayValue,
          displayValue: "0",
          waitingForNewValue: true,
          operator: "+",
        };
      }
    case SUBTRACT:
      if (state.waitingForNewValue) {
        return { ...state, operator: "-" };
      } else {
        return {
          ...state,
          previousValue: state.displayValue,
          displayValue: "0",
          waitingForNewValue: true,
          operator: "-",
        };
      }
    case MULTIPLY:
      if (state.waitingForNewValue) {
        return { ...state, operator: "*" };
      } else {
        return {
          ...state,
          previousValue: state.displayValue,
          displayValue: "0",
          waitingForNewValue: true,
          operator: "*",
        };
      }
    case DIVIDE:
      if (state.waitingForNewValue) {
        return { ...state, operator: "/" };
      } else {
        if (state.displayValue === "0") {
          return { ...state, displayValue: "∞", waitingForNewValue: true };
        }
        const newValue = state.previousValue
          ? eval(
              `${state.previousValue} ${state.operator} ${state.displayValue}`
            )
          : state.displayValue;
        return {
          ...state,
          previousValue: newValue,
          displayValue: "0",
          waitingForNewValue: true,
          operator: "/",
        };
      }
    case EQUALS:
      if (state.waitingForNewValue && state.operator) {
        if (state.operator === "/" && state.displayValue === "0") {
          return { ...state, displayValue: "∞", waitingForNewValue: true };
        }
        const newValue = eval(
          `${state.previousValue} ${state.operator} ${state.displayValue}`
        );
        return {
          ...state,
          displayValue: String(newValue),
          previousValue: null,
          waitingForNewValue: false, // Cambia a false para mantener el resultado en la pantalla
          operator: null,
        };
      } else if (!state.waitingForNewValue) {
        return state;
      }
      break;
    case INPUT_NUMBER:
      if (state.displayValue === "∞") {
        return {
          ...initialState,
          displayValue: String(action.payload),
        };
      } else {
        return {
          ...state,
          displayValue:
            state.displayValue === "0"
              ? String(action.payload)
              : state.displayValue + String(action.payload),
        };
      }
    case INPUT_DECIMAL:
      if (!state.displayValue.includes(".")) {
        return { ...state, displayValue: state.displayValue + "." };
      }
      break;
    default:
      return state;
  }
};
