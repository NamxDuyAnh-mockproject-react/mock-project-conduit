import React, { useEffect, useState } from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import FavoriteIcon from "@mui/icons-material/Favorite";
import styles from "../Home/styles.module.css";
import {
  fetchAllArticles,
  fetchArticlesFolow,
} from "../../Store/actions/articles.action";
import { current } from "@reduxjs/toolkit";
function Articlesection(props) {
  const { articles, articlesCount } = useSelector(
    (state) => state.articles.allArticlesData
  );
  const tab = useSelector((state) => state.articles.tab);

  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 10;
  const totalPages = Math.ceil(articlesCount / articlesPerPage);
  const dispatch = useDispatch();
  useEffect(() => {
    const offset = (currentPage - 1) * articlesPerPage;

    switch (tab) {
      case "all":
        dispatch(fetchAllArticles({ offset, articlesPerPage }));
        return;
      case "follow":
        dispatch(fetchArticlesFolow({ offset, articlesPerPage }));
        return;

      default:
        return;
    }
  }, [tab, currentPage]);
  if (!articles) {
    return <p>Loading articles...</p>;
  }

  if (articles.length === 0) {
    return <p>No articles found.</p>;
  }
  return (
    <>
      <Col md={12}>
        {articles.map((article) => (
          <div key={article.slug}>
            <Row className="article-preview border-bottom p-4">
              <Row className={styles.headerArticle}>
                <Row>
                  <Col xs={12} md={4}>
                    <Row className="d-flex gap-2">
                      <Col xs={2} className="my-auto">
                        <img
                          src={article?.author.image}
                          className={styles.avatar}
                          alt="avatar"
                        />
                      </Col>
                      <Col className={styles.center}>
                        <div className={styles.authorName}>
                          {article?.author.username}
                        </div>
                        <p className={styles.date}>
                          {article?.createdAt
                            ? new Date(article?.createdAt).toLocaleDateString(
                                "en-US",
                                {
                                  month: "long",
                                  day: "numeric",
                                  year: "numeric",
                                }
                              )
                            : ""}
                        </p>
                      </Col>
                    </Row>
                  </Col>
                  <Col className={styles.favorites}>
                    <button className="btn btn-outline-success">
                      <span>
                        <FavoriteIcon />
                      </span>
                      {article?.favoritesCount}
                    </button>
                  </Col>
                </Row>
              </Row>
              <Link to={`../articles/${article.slug}`} className={styles.text}>
                <Row>
                  <div className="">
                    <h3 className={styles.articleTitle}>{article.title}</h3>
                    <p>{article.description}</p>
                  </div>
                </Row>
              </Link>
            </Row>
          </div>
        ))}
      </Col>

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
    </>
  );
}

export default Articlesection;
