import React, { Component } from "react";

import { Modal, Form, Button } from "react-bootstrap";

export default class CommitGoalCreation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Title: "",
      Days: "",
    };

    this.OnSubmit = this.OnSubmit.bind(this);
    this.HandleInput = this.HandleInput.bind(this);
  }

  HandleInput(event) {
    this.setState({ ...this.state, [event.target.name]: event.target.value });
  }

  OnSubmit(event) {
    this.props.addGoal(this.state.Title);
    this.props.modalToggle();

    event.preventDefault();
  }

  <Form className="mt-5">
    <Form.Group>
        <Form.Control type="text" name="OneThing" placeholder="One Thing" />
        <Button type="button"  variant="btn btn-primary form-control rounded-pill mt-4" onClick={this.OnSubmit} >Commit!</Button>
    </Form.Group> 
  </Form>

  render() {
    return (
      <Modal
        show={this.props.modalIsOpen}
        onHide={this.props.modalToggle}
        centered
      >
        <Modal.Header closeButton>Create Goal</Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label htmlFor="goalTitle">
                <strong>Goal Title</strong>
              </Form.Label>
              <Form.Control
                id="goalTitle"
                placeholder="Goal Title"
                value={this.state.Title}
                onChange={this.HandleInput}
                name="Title"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="days" id="daysLabel">
                <strong>Days</strong>
              </Form.Label>
              <Form.Control
                id="days"
                placeholder="Days"
                value={this.state.Days}
                onChange={this.HandleInput}
                name="Days"
              />
              <Form.Text>
                The ammount of consecutive days needed to complete this goal.
              </Form.Text>
            </Form.Group>
            <Button
              onClick={this.OnSubmit}
              className="btn btn-primary rounded-pill form-control mt-3"
            >
              Create
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }
}
