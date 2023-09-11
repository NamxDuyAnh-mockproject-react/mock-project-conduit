import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';
const Header = () => {
    return (
        <>
            <Navbar bg="light" data-bs-theme="light">
                <Container className = "">
                <Navbar.Brand href="#home">Conduit</Navbar.Brand>
                <Nav className="me-auto">
                    <Link to="/">Home</Link>
                    <Link to="/login">Sign in</Link>
                    <Link to="/register">Sign up</Link>
                </Nav>
                </Container>
            </Navbar>
            
        </>
    );
};

export default Header;