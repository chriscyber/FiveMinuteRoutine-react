import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { Nav, Modal, Tab } from "react-bootstrap";
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, AddUserToDatabase, AddGoal } from "../firebase-config";


export default function LoginRegModal(props) {
  const navigate2 = useNavigate();
  //const []

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        if (props.commitGoal) {
          AddGoal(props.commitGoal, 30);
          navigate2("/Account");
        }
      }
    });
  })

    async function Register(e, email, password) {
      e.preventDefault();
    
      try {
        const user = await createUserWithEmailAndPassword(auth, email, password);
        await AddUserToDatabase(user);
        props.LogRegToggle();
        navigate2('/Account');
      } catch (err) {
        console.log(err.message);
      }
    };
      
    async function Login(e, email, password) {
      e.preventDefault();

      try {
        await signInWithEmailAndPassword(auth, email, password);
        props.LogRegToggle();
        //navigate("../Account", { replace: true });
      } catch (err) {
        console.log(err.message);
      }
    };
    
    async function Logout() {
      await signOut(auth);
    }
  
    
  return (
    <Modal show={props.logRegIsOpen} onHide={props.LogRegToggle}>
      <Tab.Container defaultActiveKey={props.DefaultKey}>
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
              <LoginForm Login={Login} />
            </Tab.Pane>
            <Tab.Pane eventKey="Register">
              <RegisterForm Register={Register} />
            </Tab.Pane>
          </Tab.Content>
        </Modal.Body>
      </Tab.Container>
    </Modal>
  );
};