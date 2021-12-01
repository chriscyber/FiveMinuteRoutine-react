import React, { Component } from "react";
import { Form } from "react-bootstrap";

export default class RegisterForm extends Component {
  render() {
    return (
      <Form>
        <Form.Group>
          <Form.Label for="Register-Email">Email *</Form.Label>
          <Form.Control
            className="bg-light text-dark rounded form-control"
            id="Register-Email"
            type="email"
            name="Email"
            placeholder="Email"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label for="Register-Username">Username *</Form.Label>
          <Form.Control
            className="bg-light text-dark rounded form-control"
            id="Register-Username"
            type="text"
            name="Username"
            placeholder="Username"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label for="Register-Password">Password *</Form.Label>
          <Form.Control
            className="bg-light text-dark rounded form-control"
            id="Register-Password"
            type="password"
            name="Password"
            placeholder="Password"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label for="Register-Confirm-Password">Password *</Form.Label>
          <Form.Control
            className="bg-light text-dark rounded form-control"
            id="Register-Confirm-Password"
            type="password"
            name="Password"
            placeholder="Confirm Password"
          />
        </Form.Group>

        <button className="btn btn-primary form-control rounded-pill mt-2">
          Register!
        </button>
      </Form>
    );
  }
}
