import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import LoginRegModal from "./LoginRegModal";
import { auth } from "../firebase-config";
import { ReactComponent as Logo } from "../Images/Logo.svg";
import Avatar from "../Images/Avatar.svg";
import { Link } from "react-router-dom";

class RenderRightNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  async logout() {
    await auth.signOut();
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ currentUser: user });
        console.log("Signed In!");
      } else {
        this.setState({ currentUser: null });
        console.log("Signed Out!");
      }
    });
  }

  render() {
    if (!this.state.currentUser) {
      return (
        <div>
          <button
            className="btn btn-outline-info rounded-pill mr-3 mt-3 btn-invert"
            id="LoginBtn"
            style={{ minWidth: "100px" }}
            onClick={this.props.LogRegToggle}
          >
            Login
          </button>
          <button
            className="btn btn-info mt-3 rounded-pill text-primary"
            id="RegisterBtn"
            style={{ minWidth: "100px" }}
          >
            Register
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <Link to="/Account">
            <img className="avatar mr-3" src={Avatar} />
          </Link>
          <button
            className="btn btn-outline-info rounded-pill btn-invert"
            onClick={this.logout}
          >
            Sign Out
          </button>
        </div>
      );
    }
  }
}

export default class SiteNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      logRegIsOpen: false,
      activeNavKey: "home",
    };

    this.LogRegToggle = this.LogRegToggle.bind(this);
  }

  LogRegToggle() {
    this.setState({ logRegIsOpen: !this.state.logRegIsOpen });
  }

  HandleNavSelection(selectedKey) {
    this.setState({ activeNavKey: selectedKey });
    console.log("Selected Key is: " + selectedKey);
  }

  render() {
    return (
      <div>
        <LoginRegModal
          logRegIsOpen={this.state.logRegIsOpen}
          LogRegToggle={this.LogRegToggle}
        />
        <div className="container-fluid pt-3">
          <header className="d-flex flex-column justify-content-center side-margin">
            <div className="container-lg">
              <Navbar expand="lg" className="navbar-dark">
                <Navbar.Brand alt="">
                  <Logo className="py-2 logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="site-nav" />
                <Navbar.Collapse id="site-nav">
                  <Nav
                    activeKey={this.state.activeNavKey}
                    className="mr-auto"
                    onSelect={(selectedKey) =>
                      this.HandleNavSelection(selectedKey)
                    }
                  >
                    <Nav.Item>
                      <Nav.Link as={Link} to="/" eventKey="home">
                        Home
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link as={Link} to="/Contactus" eventKey="contact">
                        Contact Us
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>

                  <RenderRightNav LogRegToggle={this.LogRegToggle} />
                </Navbar.Collapse>
              </Navbar>
            </div>
          </header>
        </div>
      </div>
    );
  }
}
