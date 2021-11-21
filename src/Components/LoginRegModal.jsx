import React, { Component } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Row,
  Col,
} from "reactstrap";

export default class LoginRegModal extends Component {
  render() {
    return (
      <Modal isOpen={this.props.logregToggle} toggle={this.props.LogRegToggle}>
        <ModalHeader>
          <Nav pills>
            <NavItem>
              <NavLink
                onClick={() => function Nothing() {}}
                href="#"
                className="active"
              >
                Login
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => function Nothing() {}} href="#">
                Register
              </NavLink>
            </NavItem>
          </Nav>
        </ModalHeader>
        <ModalBody>
          <TabContent activeTab="2">
            <TabPane tabId="1">
              <Row>
                <Col sm="12">
                  <LoginForm />
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row>
                <Col sm="12">
                  <RegisterForm />
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </ModalBody>
      </Modal>
    );
  }
}
