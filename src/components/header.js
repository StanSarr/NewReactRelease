import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, Button } from "reactstrap";
import * as Context from "../context";
const AuthButton = () => (
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
export default () => {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">React 16.6 Experiencing</NavbarBrand>
        <Nav className="ml-auto" navbar>
          <AuthButton />
        </Nav>
      </Navbar>
    </div>
  );
};
