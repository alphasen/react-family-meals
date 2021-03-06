import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import {ConnectedRouter} from 'connected-react-router'
import A from "../routes/A";
import B from "../routes/B";
import { connect } from "react-redux";
import AuthRoute from "../components/AuthRoute";
import { push } from 'connected-react-router'
import { UPDATE_LOGGED_USER_STATE } from "./globalReducer";

function App(props) {
  useEffect(() => {
    // 相当于didMount
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then(res => res.text())
      .then(res => {
        console.log(res);
        if (res.username) {
          this.props.updateLoggedUserState();
        }
      })
      .catch(e => {
        console.log(e);
      });
  }, []);

  return (
    <div className="App">
      <h1>Router demo</h1>
      <button onClick={
          ()=>{
              props.dispatch(push('/'))
          }
      }>go home</button>
      <ConnectedRouter history={props.history}>
        <ul>
          <li>
            <Link to="/">a</Link>
          </li>
          <li>
            <Link to="/b/2">b</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/" exact component={A} />
          <AuthRoute
            path="/b/:id"
            component={B}
            pending={props.pending}
            logged={props.logged}
            // {...props}
          />
        </Switch>
      </ConnectedRouter>
    </div>
  );
}

export default connect(
  ({ loggedUserState }) => {
    console.log("loggedUserState", loggedUserState);
    return {
      pending: loggedUserState.pending,
      logged: loggedUserState.logged
    };
  },
  dispatch => {
    return {
      updateLoggedUserState: dispatch({
        type: UPDATE_LOGGED_USER_STATE,
        data: {
          pending: false,
          logged: true
        }
      }),
      push,
      dispatch
    };
  }
)(App);
