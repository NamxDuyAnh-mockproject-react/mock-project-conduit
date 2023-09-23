import React, { useEffect } from "react";
import { Col, Nav, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Articlesection from "../Articlesection/Articlesection";
import { setTabs,setArticlesData } from "../../Store/slices/articles.slice";
const Profile = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const handleTabChange = (tab) => {
    
    dispatch(setTabs(tab));
  };
  useEffect(() => {
    dispatch(setTabs("MyArticles"));
  }, []);
  return (
    <>
      <Row>
        <Col className="col-xs-12 col-md-10 offset-md-1 text-center">
          <Image className="user-img" src={user?.image} />
          <h4>{user?.username}</h4>
          <p>{user?.bio}</p>

          <Link
            className="btn btn-sm btn-outline-secondary action-btn"
            to="../settings"
          >
            <i className="ion-gear-a"></i> Edit Profile Settings
          </Link>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={8}>
          <Nav variant="tabs" defaultActiveKey="MyArticles">
            <Nav.Item>
              <Nav.Link
                eventKey="MyArticles"
                onClick={() => handleTabChange("MyArticles")}
              >
                My article
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Favorited" onClick={() => handleTabChange("Favorited")}>
                Favorited Article
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Articlesection />
        </Col>
      </Row>
    </>
  );
};

export default Profile;
