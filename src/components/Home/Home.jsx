import { Col, Container, Nav, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import styles from "../Home/styles.module.css";
import Tag from "../Tag/Tag";
import Articlesection from "../Articlesection/Articlesection";
import {
  setTabs,
  setArticlesData,
  setCurrentTag,
} from "../../Store/slices/articles.slice";
import { useEffect } from "react";
const Home = () => {
  useEffect(() => {
    dispatch(setTabs("all"));
  }, []);
  const tab = useSelector((state) => state.articles.tab);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const handleTabChange = (tab) => {
    dispatch(setTabs(tab));
  };
  useEffect(() => {
    if (tab !== "tag") {
      dispatch(setCurrentTag(""));
    }
  }, [tab]);
  const currentTag = useSelector((state) => state.articles.currentTag);
  const currentTab = useSelector((state) => state.articles.tab);
  return (
    <Container>
      <Row>
        <Row className={styles.layout}>
          <Col md={9} className="mt-3">
            <Nav variant="tabs" defaultActiveKey="all">
              {isLoggedIn ? (
                <>
                  <Nav.Item>
                    <Nav.Link
                      eventKey="follow"
                      onClick={() => handleTabChange("follow")}
                    >
                      Your Feed
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      eventKey="all"
                      onClick={() => handleTabChange("all")}
                    >
                      Global Feed
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      eventKey="tag"
                      onClick={() => handleTabChange("tag")}
                    >
                      {currentTag ? `#${currentTag}` : null}
                    </Nav.Link>
                  </Nav.Item>
                </>
              ) : (
                <>
                  <Nav.Item>
                    <Nav.Link
                      eventKey="all"
                      onClick={() => handleTabChange("all")}
                    >
                      Global Feed
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      eventKey="tag"
                      onClick={() => handleTabChange("tag")}
                    >
                      {currentTag ? `#${currentTag}` : null}
                    </Nav.Link>
                  </Nav.Item>
                </>
              )}
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
