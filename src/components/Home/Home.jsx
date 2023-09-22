import React, { useEffect, useState } from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllArticles } from "../../Store/actions/articles.action";
import styles from "../Home/styles.module.css";
import Tag from "../Tag/Tag";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Articlesection from "../Articlesection/Articlesection";
import { setTabs } from "../../Store/slices/articles.slice";
const Home = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const handleTabChange = (tab) => {
    dispatch(setTabs(tab));
  };

  return (
    <Container>
      <Row>
        <Row className={styles.layout}>
          <Col md={9} className="mt-3">
            <Nav variant="tabs" defaultActiveKey="all">
            {isLoggedIn ?
             (
              <>
                <Nav.Item>
                  <Nav.Link
                    eventKey="follow"
                    onClick={() => handleTabChange("follow")}>
                    Your Feed
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="all" onClick={() => handleTabChange("all")}>
                    Global Feed
                  </Nav.Link>
                </Nav.Item>
              </>
             ):(
             <>
                <Nav.Item>
                  <Nav.Link eventKey="all" onClick={() => handleTabChange("all")}>
                    Global Feed
                  </Nav.Link>
                </Nav.Item>
             </>
             )
            }
            </Nav>
            <Articlesection />
          </Col>
          <Tag />
        </Row>
      </Row>
    </Container>
  );
};

export default Home;
