import React, { Component } from "react";
import LoginForm from "./LoginForm";
import { Nav, Modal } from "react-bootstrap";

export default class LoginRegModal extends Component {
  render() {
    return (
      <Modal isOpen={this.props.logregToggle} toggle={this.props.LogRegToggle}>
        <Modal.Header>
          <Nav pills>
            <Nav.Item>
              <Nav.Link
                onClick={() => function Nothing() {}}
                href="#"
                className="active"
              >
                Login
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={() => function Nothing() {}} href="#">
                Register
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Modal.Header>
        <Modal.Body>
          <LoginForm />
        </Modal.Body>
      </Modal>
    );
  }
}
