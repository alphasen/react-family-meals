import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import App from "./App";
import configureStore from "./configureStore";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";

const history = createBrowserHistory();

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={configureStore({}, history)}>
    <App />
  </Provider>,
  rootElement
);
