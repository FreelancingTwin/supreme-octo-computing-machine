import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "@picocss/pico";
import './styles/App.css'

import { Provider } from "react-redux";
import store from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
