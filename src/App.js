import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/main.css"
import HomePage from "./HomePage";



export default class App extends Component {
    render() {
      return (
        <div>
          <HomePage />
        </div>
      );
    }
  }