import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Header from "./components/header";
import Welcome from "./components/welcome";
import "./App.css";
import * as Context from "./context";

class App extends Component {
  render() {
    return (
      <Context.Language.Provider>
        <Context.Auth.Provider>
          <div>
            <Header />
            <Container>
              <Welcome />
            </Container>
          </div>
        </Context.Auth.Provider>
      </Context.Language.Provider>
    );
  }
}

export default App;
