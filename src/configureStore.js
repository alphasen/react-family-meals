import { connectRouter } from "connected-react-router";
import { createStore, combineReducers } from "redux";
import createReducers from "./createReducers";

export default function configureStore(initSate = {}, history) {
  return createStore(createReducers(history), initSate);
}
