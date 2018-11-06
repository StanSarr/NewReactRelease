import React, { useContext } from "react";
import { NavItem, Button } from "reactstrap";
import * as Context from "../context";
import { useUserInfo } from "../hooks/userInfo";

export default () => {
  const Auth = useContext(Context.Auth.AuthContext);
  const Language = useContext(Context.Language.LanguageContext);
  const user = useUserInfo("userId");
  return (
    <NavItem right={"true"}>
      {Auth.isLoggedIn ? (
        <>
          <Button onClick={() => Auth.logOut()}>
            {Language.translation.logout}
          </Button>
          {user &&
            user.isAdmin && (
              <Button
                onClick={() => {
                  //--- Do some Admin Stuff ----//
                }}
              >
                ADMIN BUTTON
              </Button>
            )}
        </>
      ) : (
        <Button onClick={() => Auth.logIn()}>
          {Language.translation.login}
        </Button>
      )}
    </NavItem>
  );
};
