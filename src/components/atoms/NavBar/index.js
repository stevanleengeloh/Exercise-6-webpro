import React from 'react'
import * as b from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <b.Navbar bg="dark" expand="lg">
            <b.Navbar.Toggle aria-controls="basic-navbar-nav" />
            <b.Navbar.Collapse id="basic-navbar-nav">
                <b.Nav className="mr-auto">
                <b.Nav.Link style={{ color: 'white' }} as={Link} to="/">Login</b.Nav.Link>
                <b.Nav.Link style={{ color: 'white' }} as={Link} to="/Register">Register</b.Nav.Link>
                <b.Nav.Link style={{ color: 'white' }} as={Link} to="/Dashboard">Dashboard</b.Nav.Link>
                <b.Nav.Link style={{ color: 'white' }} as={Link} to="/About">About</b.Nav.Link>
                <b.Nav.Link style={{ color: 'white' }} as={Link} to="/Exercise5">Exercise5</b.Nav.Link>
                <b.Nav.Link style={{ color: 'white' }} as={Link} to="/Exercise6">Exercise6</b.Nav.Link>
                </b.Nav>
            </b.Navbar.Collapse>
        </b.Navbar>
    )
}

export default NavBar