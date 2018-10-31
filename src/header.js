import React from "react";
import * as Context from "./context";

export default () => {
  return (
    <Context.Language.Consumer>
      {({ locale, translation, switchLocale }) => (
        <Context.Auth.Consumer>
          {Auth => (
            <div className={"App-header"}>
              {Auth.isLoggedIn ? (
                <div>
                  <h1>{translation.greeting}</h1>
                  <button onClick={() => Auth.logOut()}>
                    {translation.logout}
                  </button>
                </div>
              ) : (
                <div>
                  <button onClick={() => Auth.logIn()}>
                    {translation.login}
                  </button>
                </div>
              )}
              <hr />
              <div>
                <h4>{translation.localeIs}</h4>
                <button onClick={() => switchLocale()}>
                  {translation.changeLocale}
                </button>
              </div>
            </div>
          )}
        </Context.Auth.Consumer>
      )}
    </Context.Language.Consumer>
  );
};
