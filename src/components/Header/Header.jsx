import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
const Header = () => {
    const isLoggedIn = useSelector((state)=>state.auth.isLoggedIn)
    const user = useSelector((state) => state.auth.user);
    return (
        <>
            <Navbar bg="light" data-bs-theme="light">
                <Container className = "">
                <Navbar.Brand href="/">Conduit</Navbar.Brand>
                <Nav className="me-auto">
                    <Link to="/home">Home</Link>
                    {isLoggedIn?(
                        <>
                        <li>
                        <Link to="/new-article">New Article</Link>
                        </li>
                        <li>
                            <Link to="/settings">Settings</Link>
                        </li>
                        <li>
                            <Link to={`#`}>username</Link>
                        </li>
                        </>
                    ):(
                    <>
                        <Link to="/login">Sign in</Link>
                        <Link to="/register">Sign up</Link>
                    </>
                    )}
                    
                </Nav>
                </Container>
            </Navbar>
            <Outlet/>
            
        </>
    );
};

export default Header;