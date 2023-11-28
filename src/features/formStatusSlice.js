import { createSlice } from "@reduxjs/toolkit";

const formStatusSlice = createSlice({
  name: "formStatus",
  initialState: false,
  reducers: {
    toggleFormStatusAsFilled: state => {
      return true;
    }
  }
});
export const { toggleFormStatusAsFilled } = formStatusSlice.actions;
export default formStatusSlice.reducer;
export const selectFromStatus = state => state.formStatus;
