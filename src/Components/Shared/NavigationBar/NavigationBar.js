import React from "react";
import "./NavigationBar.css";
import {Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <Navbar className="sticky-top" expand="lg">
        <Navbar.Brand
          href="/"
          style={{ color: "white", fontWeight: "600", fontSize: "25px" }}
        >
          FDStationBD
        </Navbar.Brand>
        <Navbar.Toggle
          className="text-white bg-light"
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto navbar">
            <Link className="nav-link text-white ml-4 active nav" to="/">
              Home
            </Link>
            <Link className="nav-link text-white ml-4 nav" to="/service">
              Services
            </Link>
            <Link className="nav-link text-white ml-4 nav" to="/portfolio">
              Portfolio
            </Link>
            <Link className="nav-link text-white ml-4 nav" to="/about">
              About
            </Link>
            <Link className="nav-link text-white ml-4 nav" to="/contact">
              Contacts
            </Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
