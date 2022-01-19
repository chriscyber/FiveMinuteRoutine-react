import React, { Component } from "react";
import { Container, Form, Button } from "react-bootstrap";
import HomeImages from "./Components/HomeImages";
import HomeForm from "./Components/HomeForm";
import { auth } from "./firebase-config";
import { useState, useEffect } from "react";

const RenderHomeForm = () => { 
  const [currentUser, SetCurrentUser] = useState({}); // react hook

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      SetCurrentUser(user);
    });
  });

  if (currentUser) {
    return <div></div>;
  }

  return <HomeForm />;
};

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Container>
          <HomeImages />
          <RenderHomeForm />
        </Container>

        <footer className="one-thing-section">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300">
            <path
              fill="#ffffff"
              fill-opacity="1"
              d="M0,256L40,240C80,224,160,192,240,181.3C320,171,400,181,480,202.7C560,224,640,256,720,261.3C800,267,880,245,960,208C1040,171,1120,117,1200,101.3C1280,85,1360,107,1400,117.3L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
            ></path>
          </svg>
          <div style={{ backgroundColor: "white" }}>
            <h4 className="m-0 text-center pb-3">
              Copyright © 2021. All Rights Reserved
            </h4>
          </div>
        </footer>
      </div>
    );
  }
}
