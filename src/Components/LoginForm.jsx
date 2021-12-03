import React, { Component } from "react";
import { Form } from "react-bootstrap";

export default class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
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
          <Form.Label htmlFor="Login-Email">Email *</Form.Label>
          <Form.Control
            className="bg-light text-dark rounded form-control"
            id="Login-Email"
            type="text"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.HandleInput}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="Login-Password">Password *</Form.Label>
          <Form.Control
            className="bg-light text-dark rounded form-control"
            id="Login-Password"
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.HandleInput}
          />
        </Form.Group>

        <button
          className="btn btn-primary form-control rounded-pill mt-2"
          onClick={(e) =>
            this.props.Login(e, this.state.email, this.state.password)
          }
        >
          Login!
        </button>

        <button className="btn btn-outline-primary rounded-pill form-control mt-2">
          Forgot Password?
        </button>
      </Form>
    );
  }
}
