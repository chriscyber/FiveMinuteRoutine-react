import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Navbar,
    NavItem,
    NavbarToggler,
    Collapse,
    NavLink,
    Nav,
    NavbarBrand
} from 'reactstrap';

export default class App extends Component() {
    render() {
        return <div className="App">
            <Section className="Bg-Gradient">
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">Brand</NavbarBrand>
                    <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink href="#">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Contact Us</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </Section>
        </div>;
    }
}
