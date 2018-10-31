import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, Button } from "reactstrap";
import * as Context from "../context";
import AuthButton from "./authButton";

const LocaleButton = () => (
  <Context.Language.Consumer>
    {({ translation, switchLocale }) => (
      <NavItem right>
        <Button onClick={() => switchLocale()}>
          {translation.changeLocale}
        </Button>
      </NavItem>
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
          <div style={{ marginLeft: 20 }} />
          <LocaleButton />
        </Nav>
      </Navbar>
    </div>
  );
};
