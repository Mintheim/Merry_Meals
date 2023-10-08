import React, { Component } from "react";
import { Link } from "react-router-dom";
import img1 from "../images/logo.png";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

// import img2 from '../images/donate.jpg'

// import img3 from '../images/meal.jpg'

// import img4 from '../images/get-involve.jpg'

// import img5 from '../images/cover.jpg'
import "./HeaderComponent.css";

export class HeaderComponent extends Component {
  render() {
    return (
      <section class="ftco-section">
        <div class="container">
          <div class="row justify-content-between">
            <div class="col logo">
              <img src={img1} alt="..." />
              <a class="navbar-brand " href="index.html">
                {" "}
                “Enjoy your delicious meal<span>with a side of smiles”</span>
              </a>
            </div>
            <div class="col d-flex justify-content-end">
              <div class="social-media">
                {/* <a href="#" class=""><button class="my-btn">Register</button></a>
		    			<a href="#" class=""><button class="my-btn">Donate</button></a>
	 */}
                <Link to="/register">
                  <button class="my-my-btn">Register</button>
                </Link>
                <Link to="/donate">
                  <button class="my-my-btn">Donate</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
          <Container>
            <Row className="justify-content-md-center">
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Col xs lg="4">
                    <Nav.Link href="/">HOME</Nav.Link>
                  </Col>

                  <Col xs lg="4">
                    <NavDropdown
                      title="GET MEALS"
                      id="collapsible-nav-dropdown"
                      href="/getmeal"
                    >
                      <NavDropdown.Item to="/" href="/ordermeal">
                        ORDER MEALS
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/orderadult">
                        MEALS FOR ORDER ADULTS
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/caregiver">
                        FOR CARE GIVERS
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/aboutmeal">
                        ABOUT MEALS
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Col>

                  <Col xs lg="4">
                    <NavDropdown
                      title="GET INVOLVED"
                      href="/about"
                      id="collapsible-nav-dropdown"
                    >
                      <NavDropdown.Item href="/delivery">
                        DELIVERY MEALS
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/volunteer">
                        VOLUNTEER
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/involveother">
                        INVOLVED IN OTHER WAY
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Col>

                  <Col xs lg="4">
                    <Nav.Link href="/about">ABOUT</Nav.Link>
                  </Col>

                  <Col xs lg="4">
                    <Nav.Link href="/contact">CONTACT</Nav.Link>
                  </Col>
                </Nav>
              </Navbar.Collapse>
            </Row>
          </Container>
        </Navbar>
      </section>
    );
  }
}

export default HeaderComponent;
