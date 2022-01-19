import React, { Component } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ContactUs from "./ContactUs";
import AccountPage from "./AccountPage";
import HomePage from "./HomePage";
//import { auth } from "../firebase-config";
import "./css/main.css";
import SiteNav from "./Components/SiteNav";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <section className="bg-gradient">
          <SiteNav />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Contactus" element={<ContactUs />} />
            <Route
              path="/Account"
              element={<AccountPage />}
            ></Route>
          </Routes>
        </section>
      </BrowserRouter>
    );
  }
}

//https://stackoverflow.com/questions/61523669/how-to-change-page-after-login-button-click-reactjs https://reactrouter.com/docs/en/v6/api#navigate
