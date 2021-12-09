import React, { Component } from "react";
import { Container } from "react-bootstrap";


export default function ImagesHome() {
    return (
        <div>    
            <Container>
                <div className="position-relative">
                <img
                    className="image-fluid h-90 rounded border-hero-image shadow-lg"
                    src="../images/sunriseoverclouds.jpg"
                    alt="sunrise"
                    style={{ width: "100%" }}
                />
                <div className="centered">
                    <h2 className="text-white text-center">
                        {"Five Minute Morning Routine!"}
                    </h2>
                </div>
                </div>
            </Container>

            {/*-- Main image & 3 images with text --*/}
            
            <Container>
                <div className="row row-content align-items-center p-5 pt-md-5 p-md-0">
                    <div className="col-12 col-md">
                    <img
                        className="d-md-flex mr-md-3 img-thumbnail shadow-lg"
                        src="images/focusedmind.jpg"
                        alt="Old Habits, New Habits"
                    />
                    </div>
                    <div className="col">
                    <div className="align-self-center mt-3 mt-md-0 ">
                        <h2 className="text-center text-white text-md-left">
                            {"Which path are you going to take today?"}
                        </h2>
                        <p className="d-none d-lg-block text-center text-white text-md-left lead">
                        <br />
                            {"We brush our hair and wash our face every morning to conquer each day. What about grooming your mind? Do you do that every morning as well?"}
                        </p>
                    </div>
                    </div>
                </div>

                <div className="row row-content align-items-center p-5 p-md-0 pt-md-5">
                    <div className="col-12 col-md order-first order-md-last">
                    <img
                        className="d-flex ml-md-3 img-thumbnail shadow-lg"
                        src="images/habitssign.jpg"
                        alt="Contemplation"
                    />
                    </div>
                    <div className="col">
                    <div className="align-self-center mt-3 mt-md-0">
                        <h2 className="text-center text-white text-md-left">
                            {"Take 5 minutes each morning to prime your mind for habit-change."}
                        </h2>
                        <p className="d-none d-lg-block text-center text-white text-md-left lead">
                        <br />
                            {"We do this by proactively engaging in tangible actions specific to our goals: reading inspiring quotes, reciting mantras, and writing down our goals."}
                        </p>
                    </div>
                    </div>
                </div>

                <div className="row row-content align-items-center p-5 p-md-0 pt-md-5">
                    <div className="col-12 col-md">
                    <img
                        className="d-flex mr-md-3 img-thumbnail shadow-lg"
                        src="images/leap.jpg"
                        alt="Leap Across Abyss"
                    />
                    </div>
                    <div className="col">
                    <div className="align-self-center mt-3 mt-md-0">
                        <h2 className="text-center text-white text-md-left">
                            {"So you can accomplish your dreams!"}
                        </h2>
                    </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}