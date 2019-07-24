import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import App from "./App";
import { Provider } from "react-redux";
import store,{history} from './configureStore'

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App history={history}/>
  </Provider>,
  rootElement
);
