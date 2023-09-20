import React, { useEffect, useState } from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllArticles } from "../../Store/actions/articles.action";
import Tag from "../Tag/Tag";

const Home = () => {
  const dispatch = useDispatch();
  const { articles, articlesCount } = useSelector(
    (state) => state.articles.allArticlesData
  );
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 10;
  const totalPages = Math.ceil(articlesCount / articlesPerPage);

  useEffect(() => {
    const offset = (currentPage - 1) * articlesPerPage;
    dispatch(fetchAllArticles({offset,articlesPerPage}));
  }, [dispatch, currentPage, articlesPerPage]);

  if (!articles) {
    return <p>Loading articles...</p>;
  }

  if (articles.length === 0) {
    return <p>No articles found.</p>;
  }

  return (
    <Container>
      <Row>
        <Col md={9}>
          <Nav variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link href="/home">Your Feed</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">Global Feed</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col md={9}>
          {articles.map((article) => (
            <div key={article.slug}>
              <Link to={`../articles/${article.slug}`}>
                <Row className="article-preview border-bottom p-5">
                  <Row>
                    <Row>
                      <Col xs={12} md={4}>
                        <Row className="d-flex gap-3">
                          <Col xs={2} className="my-auto">
                            <img
                              src={article?.author.image}
                              style={{ maxHeight: "50px" }}
                              alt=""
                            />
                          </Col>
                          <Col className="my-auto">
                            <div className="p-0 m-0">
                              {article?.author.username}
                            </div>
                            <p className="p-0 m-0">
                              {article?.createdAt
                                ? new Date(
                                    article?.createdAt
                                  ).toLocaleDateString("en-US", {
                                    month: "long",
                                    day: "numeric",
                                    year: "numeric",
                                  })
                                : ""}
                            </p>
                          </Col>
                        </Row>
                      </Col>
                      <Col className="my-auto px-0 d-flex gap-3">
                        <button className="btn btn-outline-primary">
                          💙{article?.favoritesCount}
                        </button>
                      </Col>
                    </Row>
                  </Row>

                  <Row>
                    <div className="">
                      <h3>{article.title}</h3>
                      <p>{article.description}</p>
                    </div>
                  </Row>
                </Row>
              </Link>
            </div>
          ))}

          
            <Col md={9}>
              <ul className="pagination">
                <li
                  className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
                  onClick={() => setCurrentPage(currentPage - 1)}
                >
                  <button className="page-link">Previous</button>
                </li>
                {/* Render page numbers */}
                {Array.from({ length: totalPages }, (_, index) => (
                  <li
                    key={index + 1}
                    className={`page-item ${
                      currentPage === index + 1 ? "active" : ""
                    }`}
                    onClick={() => setCurrentPage(index + 1)}
                  >
                    <button className="page-link">{index + 1}</button>
                  </li>
                ))}
                <li
                  className={`page-item ${
                    currentPage === totalPages ? "disabled" : ""
                  }`}
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  <button className="page-link">Next</button>
                </li>
              </ul>
            </Col>
          
        </Col>

        <Tag />
      </Row>
    </Container>
  );
};

export default Home;
