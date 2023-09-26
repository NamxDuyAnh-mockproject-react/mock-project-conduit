import React, { useEffect, useState } from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import FavoriteIcon from "@mui/icons-material/Favorite";
import styles from "../Home/styles.module.css";
import { fetchArticlesByType } from "../../Store/actions/articles.action";
function Articlesection(props) {
  const articles = useSelector(
    (state) => state.articles.allArticlesData?.articles
  );
  const articlesCount = useSelector(
    (state) => state.articles.allArticlesData?.articlesCount
  );
  const tab = useSelector((state) => state.articles.tab);
  const tag = useSelector((state) => state.articles.currentTag);
  const user = useSelector((state) => state.auth.user?.username);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 10;
  const totalPages = Math.ceil(articlesCount / articlesPerPage);
  let offset = (currentPage - 1) * articlesPerPage;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArticlesByType({ type: tab, offset, articlesPerPage, user ,tag}));
  }, [tab, currentPage, dispatch, articlesPerPage, user,tag]);

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
              <Row className={styles.authorInfo}>
                <Row>
                  <Col sm={6} md={6}>
                    <Row className="d-flex">
                      <Col xs={1} className="my-auto">
                        <img
                          src={article?.author.image}
                          className={styles.avatar}
                          alt="avatar"
                        />
                      </Col>
                      <Col className={styles.authorDateName}>
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
                  <Col md={6} sm={6} className={styles.favorites}>
                    <button className="btn btn-outline-success">
                      <span>
                        <FavoriteIcon />
                      </span>
                      {article?.favoritesCount}
                    </button>
                  </Col>
                </Row>
              </Row>
              <Row>
              <div className={styles.footerArticle}>
              <Link to={`../articles/${article.slug}`} className={styles.text}>
                <h3 className={styles.articleTitle}>{article.title}</h3>
                <p>{article.description}</p>
                <span className={styles.readMore}>Read more...</span>
                <div className={styles.tagList}>
                  {article?.tagList.map((tag, index) => (
                    <span key={index} className={styles.tags}>{tag}</span>
                  ))}
                </div>
              </Link>
            </div>
              </Row>
            </Row>
          </div>
        ))}
      </Col>
      {totalPages > 1 ? (
        <Col md={9}>
          <ul className="pagination" style={{    
            marginBottom: "100px",
            display: "flex",
            flexWrap: "wrap",
            marginTop: "30px"}}>
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
      ) : (
        ""
      )}
    </>
  );
}

export default Articlesection;
