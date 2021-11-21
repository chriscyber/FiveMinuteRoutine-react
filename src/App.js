import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import BgAndNav from "./components/BgAndNav";



export default class App extends Component {
    render() {
      return (
        <div>
          <BgAndNav />
        </div>
      );
    }
  }