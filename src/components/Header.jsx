import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar, Nav, Container, Form, Button, Dropdown, NavItem, NavLink
} from "react-bootstrap";

function Header() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" fixed="top" className="shadow-sm py-4 ">
      <Container fluid>
        <Navbar.Brand as={Link} to="/moviestvshow" className="fw-bolder  ms-3 text-uppercase">
          imax
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll" >
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>

            <Navbar.Brand as={Link} to="/moviestvshow" className="fw-bolder ms-3 text-uppercase">
              imax
            </Navbar.Brand>

            <Nav.Link as={Link} to="/moviestvshow" className="text-white">
              Home
            </Nav.Link>

            <Dropdown as={NavItem}>
              <Dropdown.Toggle as={NavLink} className="text-white">
                Movies
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/moviestvshow/popularMovies">
                  Popular Movies
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/moviestvshow/upcomingmovies">
                  Upcoming Movies
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/moviestvshow/topratedmovies">
                  Top-rated Movies
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown as={NavItem}>
              <Dropdown.Toggle as={NavLink} className="text-white">
                TV Shows
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/moviestvshow/tvshows">
                  Popular Shows
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/moviestvshow/topratedshows">
                  Top-rated Shows
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

          </Nav>


          <Form className="d-flex  container-fluid "  >
            <Form.Control
              type="search"
              placeholder="Search movies, TV shows..."
              className="me-2 rounded-pill "
              aria-label="Search"
            />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
