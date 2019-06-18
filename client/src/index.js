import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import valueReducer from "./reducers/value-reducer";
import doctorReducer from "./reducers/doctors-reducer";

const allReducers = combineReducers({
  doctors: doctorReducer,
  value: valueReducer
});

const store = createStore(allReducers, {
  doctors: [{ name: "Doctor1" }, { name: "Doctor2" }, { name: "Doctor3" }],
  value: ""
});

console.log(store.getState());
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();
