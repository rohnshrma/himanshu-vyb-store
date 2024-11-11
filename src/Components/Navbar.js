// Navbar.js
import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  InputGroup,
  Button,
} from "react-bootstrap";
import { FaUser, FaSearch } from "react-icons/fa";

const CustomNavbar = () => {
  return (
    <Navbar variant="dark" expand="lg" className="custom-navbar">
      <Navbar.Brand href="#home" className="brand">
        VYB <span className="store">STORE</span>
      </Navbar.Brand>

      <Form className="search-form">
        <InputGroup>
          <InputGroup.Text className="search-icon">
            <FaSearch />
          </InputGroup.Text>
          <FormControl
            type="text"
            placeholder="Search Creator/Product"
            className="search-input"
          />
        </InputGroup>
      </Form>

      <Nav className="ml-auto">
        <Nav.Link href="#fav-creators" className="nav-item">
          Fav Creators
        </Nav.Link>
        <Nav.Link href="#merchandise" className="nav-item">
          Merchandise
        </Nav.Link>
        <Nav.Link href="#brand" className="nav-item">
          Brand
        </Nav.Link>
        <Nav.Link href="#digital" className="nav-item">
          Digital
        </Nav.Link>
      </Nav>

      <Button variant="light" className="user-icon">
        <FaUser />
      </Button>
    </Navbar>
  );
};

export default CustomNavbar;
