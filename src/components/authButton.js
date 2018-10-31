import React from "react";
import { NavItem, Button } from "reactstrap";
import * as Context from "../context";

export default () => (
  <Context.Language.Consumer>
    {({ locale, translation, switchLocale }) => (
      <Context.Auth.Consumer>
        {Auth => (
          <NavItem right>
            {Auth.isLoggedIn ? (
              <Button onClick={() => Auth.logOut()}>
                {translation.logout}
              </Button>
            ) : (
              <Button onClick={() => Auth.logIn()}>{translation.login}</Button>
            )}
          </NavItem>
        )}
      </Context.Auth.Consumer>
    )}
  </Context.Language.Consumer>
);
