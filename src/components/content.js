import React, { Component } from "react";
import { Row } from "reactstrap";
import * as context from "../context";
export default class ContentComponent extends Component {
  static contextType = context.Language.LanguageContext;
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
  _loadContext = () => {
    const value = this.context;
    this.setState({ ...value, loading: false });
  };
  componentDidMount = () => {
    this._loadContext();
  };

  componentDidUpdate = () => {
    if (this.context.locale !== this.state.locale) {
      this._loadContext();
    }
  };

  render() {
    if (this.state.loading) return <p>Loading...</p>;
    return (
      <Row>
        <p>{this.state.translation.content}</p>
      </Row>
    );
  }
}
