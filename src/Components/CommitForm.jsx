import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

export default class CommitForm extends Component {
  render() {
    return (
        <CommitForm>
            <Form className="mt-5">
            <Form.Group>
                <Form.Control type="text" name="OneThingInput" placeholder="One Thing" />
                <Button type="button"  variant="btn btn-primary form-control rounded-pill mt-4" onClick={this.OnSubmit} >Commit!</Button>
                {/* This button to fill out first goal, and link to Demo Page - possible? <Nav.Link href="/Demo"></Nav.Link> */}
            </Form.Group>
            </Form>
        </CommitForm>
    );
  }
} 


