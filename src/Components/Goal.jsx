import React, { Component } from "react";
import {
  CardBody,
  Card,
  Container,
  Row,
  Col,
  Badge,
  Progress,
} from "reactstrap";

export default class Goal extends Component {
  render() {
    return (
      <Card className="bg-light mt-3">
        <CardBody className="border-primary rounded shadow">
          <Container fluid>
            <Row>
              <Col xs={8}>
                <h5>{this.props.title}</h5>
              </Col>
              <Col className="align-self-center text-right">
                <Badge pill color="primary text-white shadow p-2 m-2">
                  <strong>{this.props.tag}</strong>
                </Badge>
              </Col>
            </Row>
            {`${this.props.value} / ${this.props.max} Days `}
            <Progress max={this.props.max} value={this.props.value} />
          </Container>
        </CardBody>
      </Card>
    );
  }
}
