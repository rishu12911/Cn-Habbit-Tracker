import { configureStore } from "@reduxjs/toolkit";
import habitReducer from "./habitSlice";
import weekViewReducer from "./weekViewSlice";

export default configureStore({
  reducer: {
    habit: habitReducer,
    weekView: weekViewReducer,
  },
});
