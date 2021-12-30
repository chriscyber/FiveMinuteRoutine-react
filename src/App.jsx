import React, {Component} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ContactUs from "./ContactUs";
import AccountPage from "./AccountPage";
import HomePage from "./HomePage";
import "./css/main.min.css";
import SiteNav from "./Components/SiteNav";

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <section className="bg-gradient">
                    <SiteNav/>
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/Contactus" element={<ContactUs/>}/>
                        <Route path="/Account" element={<AccountPage/>}/>
                    </Routes>
                </section>
            </BrowserRouter>
        );
    }
}
