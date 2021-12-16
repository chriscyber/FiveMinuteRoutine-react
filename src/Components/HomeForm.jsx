import React, { Component } from "react";

import { Form, Button } from "react-bootstrap";

export default class HomeForm extends Component {
  constructor(props) {
  super(props);

  this.state = {
      Title: "",
      Days: "30",
  };

  this.OnSubmit = this.OnSubmit.bind(this);
  this.HandleInput = this.HandleInput.bind(this);
  }

  HandleInput(event) {
    this.setState({ ...this.state, [event.target.name]: event.target.value });
  }

  OnSubmit(event) {
    this.props.addGoal(this.state.Title, this.state.Days);
    this.props.modalToggle();

    event.preventDefault();
  }

  render() {
    return (
      <Form className="mt-5">
            <Form.Group
                    controlId="floatingInput" 
                    label="One Thing"
                    className="bm-3">
                  <Form.Control 
                    type="text"  
                    placeholder="One Thing"
                  />
                <Button 
                  type="submit"
                  value="submit"  
                  variant="btn btn-primary form-control rounded-pill mt-4" 
                  
                  >Commit!
                </Button>
            </Form.Group>
          </Form>
    );
  }
}

