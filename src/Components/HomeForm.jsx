import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import LoginRegModal from "./LoginRegModal";

export default class HomeForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Title: "",
      Days: "30",
      logRegIsOpen: false,
    };

    this.OnSubmitCommit = this.OnSubmitCommit.bind(this);
    this.HandleInput = this.HandleInput.bind(this);
  }

  HandleInput(event) {
    this.setState({ ...this.state, [event.target.name]: event.target.value });
  }

  OnSubmitCommit(event) {
    console.log("One Thing submitted - " + this.state.Title);
    this.LogRegToggle();
    event.preventDefault();
  }

  LogRegToggle() {
    this.setState({ ...this.state, logRegIsOpen: !this.state.logRegIsOpen });
  }

  render() {
    return (
      <div>
        <LoginRegModal
          logRegIsOpen={this.state.logRegIsOpen}
          LogRegToggle={this.LogRegToggle}
          DefaultKey="Register"
          //pass in optional prop "commitGoal. in loginRegModal file, if prop exists (onAuthStateChanged).
        />
        <Form className="mt-5">
          <Form.Group label="One Thing" className="bm-3">
            <Form.Control
              onChange={this.HandleInput}
              type="text"
              placeholder="One Thing"
              name="Title"
            />
            <Button
              onClick={this.OnSubmitCommit}
              type="submit"
              value="submit"
              variant="btn btn-primary form-control rounded-pill mt-4"
            >
              Commit!
            </Button>
          </Form.Group>
        </Form>
      </div>
    );
  }
}
