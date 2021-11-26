import React, { Component } from "react";
import {
  Modal,
  ModalBody,
  ModalHeader,
  Form,
  FormGroup,
  Input,
  Label,
  FormText,
} from "reactstrap";

export default class GoalCreationModal extends Component {
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
    this.props.addGoal(this.state.Title, this.state.Days);
    this.props.modalToggle();

    event.preventDefault();
  }

  render() {
    return (
      <Modal
        isOpen={this.props.modalIsOpen}
        toggle={this.props.modalToggle}
        centered
      >
        <ModalHeader>Create Goal</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label htmlFor="goalTitle">
                <strong>Goal Title</strong>
              </Label>
              <Input
                id="goalTitle"
                placeholder="Goal Title"
                value={this.state.Title}
                onChange={this.HandleInput}
                name="Title"
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="days" id="daysLabel">
                <strong>Days</strong>
              </Label>
              <Input
                id="days"
                placeholder="Days"
                value={this.state.Days}
                onChange={this.HandleInput}
                name="Days"
              />
              <FormText>
                The ammount of consecutive days needed to complete this goal.
              </FormText>
            </FormGroup>
            <FormGroup>
              <button
                onClick={this.OnSubmit}
                className="btn btn-primary rounded-pill form-control"
              >
                Create
              </button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    );
  }
}
