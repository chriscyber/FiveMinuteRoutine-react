import React, { Component } from "react";

import {
  Card,
  Container,
  Row,
  Col,
  Badge,
  ProgressBar,
  Button,
} from "react-bootstrap";

export default class Goal extends Component {
  render() {
    return (
      <Card className="bg-light mt-3">
        <Card.Body className="border-primary rounded shadow">
          <Container fluid>
            <Row>
              <Col xs={8}>
                <h5>{this.props.title}</h5>
              </Col>
              <Col className="align-self-center text-right">
                <Badge pill color="primary shadow p-2 m-2" text="light">
                  <strong>{this.props.tag}</strong>
                </Badge>
              </Col>
            </Row>
            {`${this.props.value} / ${this.props.max} Days `}
            <ProgressBar max={this.props.max} now={this.props.value} />
            <Button
              variant="primary"
              className="rounded-pill mt-3"
              onClick={(e) =>
                this.props.RemoveGoal(e, {
                  Title: this.props.title,
                  Days: this.props.max,
                  Progress: this.props.value,
                })
              }
            >
              Remove Goal
            </Button>
          </Container>
        </Card.Body>
      </Card>
    );
  }
}
