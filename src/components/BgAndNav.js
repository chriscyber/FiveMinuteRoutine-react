import React, { Component } from "react";
import {
    Navbar,
    NavItem,
    NavbarToggler,
    Collapse,
    NavLink,
    Nav,
    NavbarBrand
} from 'reactstrap';


export default class BgAndNav extends Component {
    render() {
        return (
            <section className="bg-gradient">
                <div className="container-fluid pt-3">
                    <header className="d-flex flex-column justify-content-center side-margin">
                        <div className="container-lg">
                            <Nav className="navbar navbar-expand-md navbar-dark">
                                <NavbarBrand href="/" className="py-2 logo" src="images/Logo.svg" alt=""></NavbarBrand>                      
                                <NavbarToggler type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </NavbarToggler>

                                <Collapse navbar id="navbarSupportedContent">
                                    <Navbar className="navbar-nav" mr-auto>
                                        <NavItem>
                                            <NavLink active href="/">Home<span className="sr-only">(current)</span></NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink href="/contactUs.html">Contact Us</NavLink>
                                        </NavItem>
                                    </Navbar>
                                    <div pills>
                                        <Button className="btn btn-outline-info rounded-pill mr-3 mt-3 btn-invert" id="LoginBtn" style="min-width: 100px;">Login</Button>
                                        <Button className="btn btn-info mt-3 rounded-pill text-primary" id="RegisterBtn" style="min-width: 100px;">Register</Button>
                                    </div>
                                </Collapse>
                            </Nav>
                        </div>
                    </header>
                </div>
            </section>
        );
        
    }

}



