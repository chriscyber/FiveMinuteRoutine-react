import React from "react";
import {Container} from "react-bootstrap";

export default function AccountDailyQuote(props) {
    return (
        <Container fluid className="pt-5" style={{maxWidth: 1500}}>
            <div className="text-white">
                <h1>Daily Quote</h1>
            </div>

            <div className="jumbotron jumbotron-fluid rounded bg-light shadow-lg mx-auto border-primary mt-5 pb-5">
                <Container>
                    <div className="row">
                        <div className="col-12 col-lg-4 text-center">
                            <img
                                src="images/MLK_Speach.jpg"
                                className="mr-3 round-image border-primary"
                                alt="MLK"
                            />
                        </div>
                        <div className="col-12 col-lg-8 text-center my-auto">
                            <blockquote className="blockquote text-center mt-md-5">
                                <p className="mb-0">
                                    “Out of the mountain of despair, a stone of hope”
                                </p>
                                <footer className="blockquote-footer">
                                    Martin Luther King, Jr.
                                </footer>
                            </blockquote>
                        </div>
                    </div>
                </Container>
            </div>
        </Container>
    );
}
