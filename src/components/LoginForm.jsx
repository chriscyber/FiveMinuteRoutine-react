import React, { Component } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";

export default class LoginForm extends Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="Login-Username">Username *</Label>
          <Input
            className="bg-light text-dark rounded form-control"
            id="Login-Username"
            type="text"
            name="Username"
            placeholder="Username"
          />
        </FormGroup>

        <FormGroup>
          <Label for="Login-Password">Password *</Label>
          <Input
            className="bg-light text-dark rounded form-control"
            id="Login-Password"
            type="text"
            name="Password"
            placeholder="Password"
          />
        </FormGroup>

        <FormGroup>
          <a
            href="/accountPage.html"
            class="btn btn-primary form-control rounded-pill mt-2"
            id="Login-Submit"
          >
            Login!
          </a>
        </FormGroup>

        <FormGroup>
          <button className="btn btn-outline-primary rounded-pill form-control">
            Forgot Password?
          </button>
        </FormGroup>
      </Form>
    );
  }
}