import { createSlice } from "@reduxjs/toolkit";

export const WeekViewSlice = createSlice({
  name: "weekView",
  initialState: false,
  reducers: {
    changeWeekView: (state) => (state = !state),
  },
});

export const { changeWeekView } = WeekViewSlice.actions;

export default WeekViewSlice.reducer;
