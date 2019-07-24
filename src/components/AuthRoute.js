import React from "react";
import { Route, Redirect } from "react-router-dom";

class AuthRoute extends React.Component {
  render() {
    const { component: Component, pending, logged, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={props => {
          // pending ? <div>Loading...</div> : "";
          if (pending) {
            return <div>Loading</div>;
          }
          return logged ? (
            <Component {...props} />
          ) : (
            <Redirect to="/auth/login" />
          );
        }}
      />
    );
  }
}
export default AuthRoute;
