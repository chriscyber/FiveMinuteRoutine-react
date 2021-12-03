import React from "react";
import {Container} from "react-bootstrap";

export default function AccountMantra(props) {
    return (
        <div className="position-relative" style={{height: "25rem"}}>
            <Container fluid>
                <div
                    className="jumbotron jumbotron-fluid rounded bg-light shadow-lg account-jumbotron mx-auto border-primary"
                    style={{maxWidth: 1500}}
                >
                    <Container>
                        <div className="row">
                            <div className="text-dark col-12">
                                <h1 className="text-center">Mantra</h1>
                            </div>
                            <div className="text-dark col-12 text-center">
                                <h5 className="text-center">
                                    Repeat this to yourself in a mirror for 5 minutes this morning
                                </h5>
                                <p>“I will have a good day, because it's my choice.”</p>
                            </div>
                        </div>
                    </Container>
                </div>
            </Container>
        </div>
    );
}
