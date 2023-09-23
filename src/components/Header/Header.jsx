import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import styles from "./styles.module.css"
import SettingsIcon from '@mui/icons-material/Settings';
import ArticleIcon from '@mui/icons-material/Article';

const Header = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
 
  const user = useSelector((state) => state.auth.user);
  
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container className="">
          <Navbar.Brand href="/">Conduit</Navbar.Brand>
          <Nav className={styles.navLink}>
            <Link to="/home" className={styles.linkItem}>Home</Link>
            {isLoggedIn ? (
              <>
                  <NavLink to="/new-article" className={styles.linkItem}>
                    <span><ArticleIcon fontSize="small"/></span>
                    New Article</NavLink>
                  <NavLink to="/settings" className={styles.linkItem}>
                    <span><SettingsIcon fontSize="small"/></span>
                    Settings</NavLink>
                  <NavLink to="/profile" className={styles.linkItem}>
                    <img src={user.image} alt="" />
                    {user.username}
                    </NavLink>
              </>
            ) : (
              <>
                <NavLink to="/login" className={styles.linkItem}>Sign in</NavLink>
                <NavLink to="/register" className={styles.linkItem}>Sign up</NavLink>
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
