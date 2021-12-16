import React, {Component} from "react";
import {Container, Button} from "react-bootstrap";
import Goal from "./Goal";
import GoalCreationModal from "./GoalCreationModal";
import {
    doc,
    updateDoc,
    arrayUnion,
    getDoc,
    arrayRemove,
} from "firebase/firestore";

import {db, auth} from "../firebase-config";

function RenderGoals(props) {
    return (
        <div>
            {props.Goals.map((goal, index) => {
                return (
                    <Goal
                        key={index}
                        title={goal.Title}
                        tag="health"
                        value={0}
                        max={goal.Days}
                        RemoveGoal={props.RemoveGoal}
                    />
                );
            })}
        </div>
    );
}

export default class AccountGoals extends Component {
    constructor(props) {
        super(props);

        this.state = {
            GaolModalIsOpen: false,
            Goals: [],
        };

        this.ToggleGoalModal = this.ToggleGoalModal.bind(this);
        this.AddGoal = this.AddGoal.bind(this);
        this.RemoveGoal = this.RemoveGoal.bind(this);
        this.GetGoalsFormDatabase = this.GetGoalsFormDatabase.bind(this);
    }

    ToggleGoalModal() {
        this.setState((state) => {
            return {GaolModalIsOpen: !state.GaolModalIsOpen};
        });
    }

    async componentDidMount() {
        await auth.onAuthStateChanged(async (user) => {
            await this.GetGoalsFormDatabase();
        });
    }

    async GetGoalsFormDatabase() {
        try {
            const docRef = doc(db, "users", `${auth.currentUser.email}`);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const Goals = docSnap.data().Goals;

                Goals.forEach((goal) => {
                    this.setState((state) => {
                        return {
                            Goals: [
                                ...state.Goals,
                                {Title: goal.Title, Days: Number(goal.Days)},
                            ],
                        };
                    });
                });
            }
        } catch (err) {
            console.log(err.message);
        }
    }

    async RemoveGoal(event, Goal) {
        event.preventDefault();

        this.setState((state) => {
            const filter = state.Goals.filter((goal) => goal.Title !== Goal.Title);
            console.log("Title to remove: ", Goal.Title);
            return {Goals: filter};
        });

        try {
            const usersRef = doc(db, "users", `${auth.currentUser.email}`);
            await updateDoc(usersRef, {
                Goals: arrayRemove({
                    Title: Goal.Title,
                    Days: Number(Goal.Days),
                    Progress: Goal.Progress,
                }),
            });
        } catch (err) {
            console.log(err.message);
        }
    }

    async AddGoal(Title, Days) {
        this.setState((state) => {
            return {Goals: [...state.Goals, {Title: Title, Days: Number(Days)}]};
        });

        try {
            const usersRef = doc(db, "users", `${auth.currentUser.email}`); //updates doc/item in user's db and grab email tied to doc */
            await updateDoc(usersRef, {
                Goals: arrayUnion({Title: Title, Days: Number(Days), Progress: 0}),
            });
        } catch (err) {
            console.log(err.message);
        }
    }

    render() {
        return (
            <div>
                <GoalCreationModal
                    modalToggle={this.ToggleGoalModal}
                    modalIsOpen={this.state.GaolModalIsOpen}
                    addGoal={this.AddGoal}
                />
                <Container fluid style={{maxWidth: 1200}}>
                    <h3 className="mb-3">Morning Routine Goals</h3>
                    <hr/>

                    <RenderGoals
                        Goals={this.state.Goals}
                        RemoveGoal={this.RemoveGoal}
                    />

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
