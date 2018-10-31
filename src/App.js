import React, { Component } from "react";
import Header from "./header";
import logo from "./logo.svg";
import "./App.css";
import * as Context from "./context";

class App extends Component {
  render() {
    return (
      <Context.Language.Provider>
        <Context.Auth.Provider>
          <div className="App">
            <Header />
          </div>
        </Context.Auth.Provider>
      </Context.Language.Provider>
    );
  }
}

export default App;
