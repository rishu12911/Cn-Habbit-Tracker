import { createSlice } from "@reduxjs/toolkit";

export const habitSlice = createSlice({
  name: "habit",
  initialState: {
    habits: [],
  },
  reducers: {
    addHabit: (state, action) => {
      state.habits = [action.payload, ...state.habits];
    },
    updateHabit: (state, action) => {
      const obj = {};
      obj[action.payload.habitName] = action.payload.newArray;
      state.habits.splice(action.payload.index, 1, obj);
    },
  },
});

export const { addHabit, updateHabit } = habitSlice.actions;

export default habitSlice.reducer;
