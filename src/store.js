import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./reducers/cardSlice";
import counterReducer from "./reducers/counterSlice";
import detailsReducer from "./reducers/detailsSlice";
export default configureStore({
  reducer: { counter: counterReducer, cards: cardReducer, details: detailsReducer },
});
