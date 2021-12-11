import React, { Component } from "react";
import { Form } from "react-bootstrap";

export default class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      confirm_password: "",
    };

    this.HandleInput = this.HandleInput.bind(this);
  }

  HandleInput(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <Form>
        <Form.Group>
          <Form.Label htmlFor="Register-Email">Email *</Form.Label>
          <Form.Control
            className="bg-light text-dark rounded form-control"
            id="Register-Email"
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.HandleInput}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="Register-Password">Password *</Form.Label>
          <Form.Control
            className="bg-light text-dark rounded form-control"
            id="Register-Password"
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.HandleInput}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="Register-Confirm-Password">
            Password *
          </Form.Label>
          <Form.Control
            className="bg-light text-dark rounded form-control"
            id="Register-Confirm-Password"
            type="password"
            name="confirm_password"
            placeholder="Confirm Password"
            value={this.state.confirm_password}
            onChange={this.HandleInput}
          />
        </Form.Group>

        <button
          className="btn btn-primary form-control rounded-pill mt-2"
          onClick={(e) => {
            this.props.Register(e, this.state.email, this.state.password);
          }}
        >
          Register!
        </button>
      </Form>
    );
  }
}
