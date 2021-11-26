import React, { Component } from "react";
import ContactUs from "./ContactUs";
import AccountPage from "./AccountPage";
import TestLogin from "./TestLogin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/main.css";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TestLogin />} />
          <Route path="/Contactus" element={<ContactUs />} />
          <Route path="/Account" element={<AccountPage />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
