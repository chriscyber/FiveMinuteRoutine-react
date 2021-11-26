import React, { Component } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";

export default class RegisterForm extends Component {
  render() {
    return (
      <Form class="ml-3 mr-3">
        <FormGroup class="form-group">
          <Label for="Register-Email">Email *</Label>
          <Input
            class="bg-light text-dark rounded form-control"
            id="Register-Email"
            type="email"
            name="Email"
            placeholder="Email"
          />
        </FormGroup>
        <FormGroup class="form-group">
          <Label for="Register-Username">Username *</Label>
          <Input
            class="bg-light text-dark rounded form-control"
            id="Register-Username"
            type="text"
            name="Username"
            placeholder="Username"
          />
        </FormGroup>
        <FormGroup class="form-group">
          <Label for="Regiser-Password">Password *</Label>
          <Input
            class="bg-light text-dark rounded form-control"
            id="Regiser-Password"
            type="password"
            name="Password"
            placeholder="Password"
          />
        </FormGroup>
        <FormGroup class="form-group">
          <Label for="Regiser-Confirm-Password">Confirm Password *</Label>
          <Input
            class="bg-light text-dark rounded form-control"
            id="Regiser-Confirm-Password"
            type="password"
            name="Confirm-Password"
            placeholder="Confirm Password"
          />
        </FormGroup>
        <FormGroup class="form-group">
          <a
            href="/accountPage.html"
            class="btn btn-primary form-control rounded-pill mt-2"
            id="Register-Submit"
          >
            Register!
          </a>
        </FormGroup>
        <FormGroup class="form-group">
          <button class="btn btn-outline-primary rounded-pill form-control">
            Forgot Password?
          </button>
        </FormGroup>
      </Form>
    );
  }
}