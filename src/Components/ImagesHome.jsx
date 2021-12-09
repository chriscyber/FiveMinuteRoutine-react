import React, { Component } from "react";
import { Container } from "react-bootstrap";


export default function MainImage() {
    return (
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
                Five Minute Morning Routine!
                </h2>
            </div>
            </div>
        </Container>
    );
}