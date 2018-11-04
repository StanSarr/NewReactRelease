import React, { useContext, useState } from "react";
import { NavItem, Button } from "reactstrap";
import * as Context from "../context";

// const someContext = React.createContext({ some: "A" });
export default () => {
  const [count, setCount] = useState(0);
  console.log(count);
  return (
    <Context.Language.Consumer>
      {({ locale, translation, switchLocale }) => (
        <Context.Auth.Consumer>
          {Auth => (
            <NavItem right={"true"}>
              {Auth.isLoggedIn ? (
                <Button onClick={() => Auth.logOut()}>
                  {translation.logout}
                </Button>
              ) : (
                <Button onClick={() => Auth.logIn()}>
                  {translation.login}
                </Button>
              )}
            </NavItem>
          )}
        </Context.Auth.Consumer>
      )}
    </Context.Language.Consumer>
  );
};
