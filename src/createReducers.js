import loggedUserState from "./App/globalReducer";
import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";

export default function createReducers(history) {
  const reducers = combineReducers({
    router: connectRouter(history),
    loggedUserState
  });
  return reducers;
}
