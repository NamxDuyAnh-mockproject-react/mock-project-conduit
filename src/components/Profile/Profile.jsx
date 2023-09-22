import React, { useEffect } from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Articlesection from "../Articlesection/Articlesection";
import { setTabs } from "../../Store/slices/articles.slice";
const Profile = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

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
          <Nav variant="tabs" defaultActiveKey="all">
            <Nav.Item>
              <Nav.Link
                eventKey="follow"
                onClick={() => handleTabChange("follow")}
              >
                Your Feed
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="all" onClick={() => handleTabChange("all")}>
                Global Feed
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
