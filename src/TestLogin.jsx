import React, { Component } from "react";
import { Container, Form, FormGroup, Input, Label, Button } from "reactstrap";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { auth } from "./firebase-config";

export default class TestLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };

    this.HandleInput = this.HandleInput.bind(this);
    this.Register = this.Register.bind(this);
    this.Login = this.Login.bind(this);
    this.Logout = this.Logout.bind(this);
  }

  HandleInput(event) {
    this.setState({ ...this.state, [event.target.name]: event.target.value });
  }

  async Register() {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        this.state.email,
        this.state.password
      );
      console.log(user);
    } catch (err) {
      console.log(err.message);
    }
  }

  async Login() {}

  async Logout() {}

  render() {
    return (
      <Container>
        <Form>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              name="email"
              id="email"
              placeholder="Email"
              type="email"
              value={this.state.email}
              onChange={this.HandleInput}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Email</Label>
            <Input
              name="password"
              id="password"
              placeholder="Password"
              type="password"
              value={this.state.password}
              onChange={this.HandleInput}
            />
          </FormGroup>
          <FormGroup>
            <Button color="primary" onClick={this.Register}>
              Register
            </Button>
          </FormGroup>
        </Form>
      </Container>
    );
  }
}
