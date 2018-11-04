import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const conditionComponent = props => {
  useEffect(() => console.log("componentDidMount"));
  return <div>{props.text}</div>;
};
export default function securityForm() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    checkMe: false
  });

  const handleInputChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setCredentials(oldCredentials => ({
      ...oldCredentials,
      [name]: value
    }));
  };

  return (
    <Form>
      <FormGroup>
        <Label for="formEmail">Email</Label>
        <Input
          onChange={handleInputChange}
          type="email"
          name="email"
          id="formEmail"
          placeholder="Email placeholder"
        />
      </FormGroup>
      <FormGroup>
        <Label for="formPassword">Password</Label>
        <Input
          onChange={handleInputChange}
          type="password"
          name="password"
          id="formPassword"
          placeholder="password placeholder"
        />
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input
            type="checkbox"
            onChange={handleInputChange}
            name="checkMe"
            value={credentials.checkMe}
          />{" "}
          Check me out to accept conditions
        </Label>
      </FormGroup>
      <Button
        onClick={() => console.log(credentials)}
        disabled={!credentials.checkMe}
      >
        Log In
      </Button>
    </Form>
  );
}
