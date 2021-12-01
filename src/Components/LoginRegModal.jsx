import React, { Component } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { Nav, Modal, Tab } from "react-bootstrap";

export default class LoginRegModal extends Component {
  render() {
    return (
      <Modal show={this.props.logRegIsOpen} onHide={this.props.LogRegToggle}>
        <Tab.Container defaultActiveKey="Login">
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
                <LoginForm />
              </Tab.Pane>
              <Tab.Pane eventKey="Register">
                <RegisterForm />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    );
  }
}
