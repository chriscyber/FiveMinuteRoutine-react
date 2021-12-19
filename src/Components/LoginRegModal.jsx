import React, { Component } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { Nav, Modal, Tab } from "react-bootstrap";
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, AddUserToDatabase } from "../firebase-config";

export default class LoginRegModal extends Component {
  constructor(props) {
    super(props);

    this.Register = this.Register.bind(this);
    this.Login = this.Login.bind(this);
    this.Logout = this.Logout.bind(this);
  }

  async Register(e, email, password) {
    e.preventDefault();

    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      await AddUserToDatabase(user);
      this.props.LogRegToggle();
    } catch (err) {
      console.log(err.message);
    }
  }

  async Login(e, email, password) {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      this.props.LogRegToggle();
    } catch (err) {
      console.log(err.message);
    }
  }

  async Logout() {
    await signOut(auth);
  }

  render() {
    return (
      <Modal show={this.props.logRegIsOpen} onHide={this.props.LogRegToggle}>
        <Tab.Container defaultActiveKey={this.props.DefaultKey}>
          <Modal.Header>
            <Nav variant="pills">
              <Nav.Item>
                <Nav.Link eventKey="Login">Login</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="Register">Register</Nav.Link>
              </Nav.Item>
            </Nav>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey="Login">
                <LoginForm Login={this.Login} />
              </Tab.Pane>
              <Tab.Pane eventKey="Register">
                <RegisterForm Register={this.Register} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    );
  }
}
