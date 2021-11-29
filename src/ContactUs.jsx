import React, { Component } from "react";

import { Form, Container, Card } from "react-bootstrap";
import SiteNav from "./Components/SiteNav";

export default class ContactUs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      message: "",
    };

    this.HandleInput = this.HandleInput.bind(this);
  }

  HandleInput(event) {
    this.setState({ ...this.state, [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div>
        <div className="bg-gradient">
          <SiteNav />
          <Container fluid className=" pt-5">
            <div className="row justify-content-center">
              <h3 class="text-center text-white mt-5 side-margin col-8">
                We welcome any feedback.
              </h3>
            </div>

            <div className="row justify-content-center">
              <Card className="bg-light mt-5 shadow-lg overtop col-8">
                <Card.Header className="text-center text-white bg-primary">
                  <h3>Contact Us!</h3>
                </Card.Header>
                <Card.Body>
                  <Card.Text>
                    <Form className="ml-3 mr-3">
                      <Form.Group>
                        <Form.Label for="ContactName">Name *</Form.Label>
                        <Form.Control
                          className="bg-light text-dark rounded"
                          id="ContactName"
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          value={this.state.name}
                          onChange={this.HandleInput}
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label for="Email">Your Email *</Form.Label>
                        <Form.Control
                          className="bg-light text-dark rounded"
                          id="Email"
                          type="email"
                          name="email"
                          placeholder="Your Email"
                          value={this.state.email}
                          onChange={this.HandleInput}
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label for="Message">Message *</Form.Label>
                        <Form.Control
                          className="bg-light text-dark rounded"
                          id="Message"
                          rows="6"
                          as="textarea"
                          name="message"
                          placeholder="Message"
                          value={this.state.message}
                          onChange={this.HandleInput}
                        />
                      </Form.Group>
                      <Form.Group>
                        <button className="btn btn-primary form-control rounded-pill mt-2">
                          Submit!
                        </button>
                      </Form.Group>
                    </Form>
                  </Card.Text>
                </Card.Body>
                .
              </Card>
            </div>
          </Container>
        </div>

        <footer class="bg-secondary">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300">
            <path
              fill="#ffffff"
              fill-opacity="1"
              d="M0,256L40,240C80,224,160,192,240,181.3C320,171,400,181,480,202.7C560,224,640,256,720,261.3C800,267,880,245,960,208C1040,171,1120,117,1200,101.3C1280,85,1360,107,1400,117.3L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
            ></path>
          </svg>
          <div style={{ backgroundColor: "white" }}>
            <h4 class="m-0 text-center pb-3">
              Copyright © 2021. All Rights Reserved
            </h4>
          </div>
        </footer>
      </div>
    );
  }
}
