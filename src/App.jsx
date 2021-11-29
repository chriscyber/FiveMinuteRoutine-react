import React, { Component } from "react";
import ContactUs from "./ContactUs";
import AccountPage from "./AccountPage";
import HomePage from "./HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/main.min.css";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Contactus" element={<ContactUs />} />
          <Route path="/Account" element={<AccountPage />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
