import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import styles from "./styles.module.css"



const Header = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
 
  const user = useSelector((state) => state.auth.user);
  
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container className="">
          <Navbar.Brand href="/">Conduit</Navbar.Brand>
          <Nav className={styles.navLink}>
            <Link to="/home">Home</Link>
            {isLoggedIn ? (
              <>
                <li>
                  <NavLink to="/new-article">New Article</NavLink>
                </li>
                <li>
                  <NavLink to="/settings">Settings</NavLink>
                </li>
                <li>
                  <NavLink to={`#`}>{user.username}</NavLink>
                </li>
              </>
            ) : (
              <>
                <NavLink to="/login">Sign in</NavLink>
                <NavLink to="/register">Sign up</NavLink>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
};

export default Header;
