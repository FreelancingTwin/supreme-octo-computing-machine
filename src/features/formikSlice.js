import { createSlice } from "@reduxjs/toolkit";

const formDataSlice = createSlice({
  name: "formData",
  initialState: {
    userData: {
      name: "NA",
      age: 18,
      email: "NA",
      phone: 0,
      matter: "NA",
      date: new Date().toLocaleDateString().replace(/\//g, '-')
    }
  },
  reducers: {
    fillForm: (state, action) => {
        // console.log(action.payload)
      return {
        ...state,
        userData: action.payload
      };
    }
  }
});

export const { fillForm } = formDataSlice.actions;
export default formDataSlice.reducer;

export const selectFormData = (state) => state.formData.userData;
