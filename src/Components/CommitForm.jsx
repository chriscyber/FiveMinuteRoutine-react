import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

//make this a child class of GoalCreationModal?
export default class CommitForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Title: "",
    };

    this.OnSubmit = this.OnSubmit.bind(this);
    this.HandleInput = this.HandleInput.bind(this);
  }

  HandleInput(event) {
    this.setState( {Title: event.target.value} );
  }

  OnSubmit(event) {
    this.props.addGoal(this.state.Title);
    console.log("Commit entry = " + this.state.value)
    event.preventDefault();
  }

  render() {
    return (
        <Form className="mt-5">
          <Form.Group>
              <Form.Control 
                type="text" 
                name="OneThingInput" 
                placeholder="One Thing" 
                id="goalTitle"
                value={this.state.value}
                onChange={this.HandleInput}/>
              <Button 
                type="submit"
                value="submit"  
                variant="btn btn-primary form-control rounded-pill mt-4" 
                onClick={this.onSubmit}
                >Commit!
              </Button>
              {/* This button to fill out first goal, and link to Demo Page - possible? <Nav.Link href="/Demo"></Nav.Link> */}
          </Form.Group>
        </Form>
    );
  }
} 


