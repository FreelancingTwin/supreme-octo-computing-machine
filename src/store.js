// import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from './counterSlice'; // Import your slice

// const store = configureStore({
//   reducer: {
//     counter: counterReducer, // Add your slice's reducer here
//     // Add more reducers if needed
//   },
// });

// export default store;
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import formReducer from "./features/formikSlice";
import formStatusReducer from './features/formStatusSlice'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    form: formReducer,
    formStatus: formStatusReducer
  }
});

export default store;
