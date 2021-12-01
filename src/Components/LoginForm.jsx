import React, { Component } from "react";
import { Form } from "react-bootstrap";

export default class LoginForm extends Component {
  render() {
    return (
      <Form>
        <Form.Group>
          <Form.Label for="Login-Username">Username *</Form.Label>
          <Form.Control
            className="bg-light text-dark rounded form-control"
            id="Login-Username"
            type="text"
            name="Username"
            placeholder="Username"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label for="Login-Password">Password *</Form.Label>
          <Form.Control
            className="bg-light text-dark rounded form-control"
            id="Login-Password"
            type="text"
            name="Password"
            placeholder="Password"
          />
        </Form.Group>

        <button className="btn btn-primary form-control rounded-pill mt-2">
          Login!
        </button>

        <button className="btn btn-outline-primary rounded-pill form-control mt-2">
          Forgot Password?
        </button>
      </Form>
    );
  }
}
