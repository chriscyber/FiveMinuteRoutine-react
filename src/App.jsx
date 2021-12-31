import React, { Component } from "react";
import ContactUs from "./ContactUs";
import AccountPage from "./AccountPage";
import HomePage from "./HomePage";
<<<<<<< HEAD
import RenderHomeForm from "./HomePage";
import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";
import { Redirect } from "react-router";
=======
import { BrowserRouter, Routes, Route } from "react-router-dom";
>>>>>>> parent of 8ba6542 (Register Redirect to Account in progress)
import "./css/main.min.css";
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
            <Route path="/Account" element={<AccountPage />} />
            <Redirect to="/Account" />
          </Routes>
        </section>
      </BrowserRouter>
    );
  }
}
