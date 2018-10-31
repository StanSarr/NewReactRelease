import React from "react";
import * as Context from "../context";
import { Row } from "reactstrap";
export default () => {
  return (
    <Context.Language.Consumer>
      {({ translation }) => (
        <Context.Auth.Consumer>
          {Auth => (
            <Row>
              {Auth.isLoggedIn ? (
                <h1>{translation.greeting}</h1>
              ) : (
                <h1>{translation.welcome}</h1>
              )}
              <div>{translation.content}</div>
            </Row>
          )}
        </Context.Auth.Consumer>
      )}
    </Context.Language.Consumer>
  );
};
