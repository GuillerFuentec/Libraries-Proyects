import { configureStore } from "@reduxjs/toolkit";
import { calculatorReducer } from "./reducers/reducers";

export const store = configureStore({
    reducer: {
      calculatorReducer: calculatorReducer,
    },
  });
