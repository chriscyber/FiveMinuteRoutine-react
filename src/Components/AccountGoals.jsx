import React, { Component } from "react";
import { Container, Button } from "react-bootstrap";
import Goal from "./Goal";
import GoalCreationModal from "./GoalCreationModal";

export default class AccountGoals extends Component {
  constructor(props) {
    super(props);

    this.state = {
      GaolModalIsOpen: false,
      Goals: [],
    };

    this.ToggleGoalModal = this.ToggleGoalModal.bind(this);
    this.AddGoal = this.AddGoal.bind(this);
  }

  ToggleGoalModal() {
    this.setState((state) => {
      return { GaolModalIsOpen: !state.GaolModalIsOpen };
    });
  }

  AddGoal(Title, Days) {
    this.setState((state) => {
      return { Goals: [...state.Goals, { Title: Title, Days: Number(Days) }] };
    });
  }

  render() {
    return (
      <div>
        <GoalCreationModal
          modalToggle={this.ToggleGoalModal}
          modalIsOpen={this.state.GaolModalIsOpen}
          addGoal={this.AddGoal}
        />
        <Container fluid style={{ maxWidth: 1200 }}>
          <h3 className="mb-3">Morning Routine Goals</h3>
          <hr />
          {this.state.Goals.map(function (item, i) {
            return (
              <Goal
                key={i}
                title={item.Title}
                tag="health"
                value={0}
                max={item.Days}
              />
            );
          })}
          <Button
            variant="primary"
            className="rounded-pill mt-5"
            onClick={this.ToggleGoalModal}
          >
            Add Goal
          </Button>
        </Container>
      </div>
    );
  }
}
