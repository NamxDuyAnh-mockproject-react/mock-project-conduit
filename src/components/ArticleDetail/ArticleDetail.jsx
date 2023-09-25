import React from "react";
import { useEffect } from "react";
import { Col, Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetailArticles } from "../../Store/actions/articles.action";
import Comment from "../Comment/Comment";
import styles from "./styles.module.css"
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EditIcon from '@mui/icons-material/Edit';

function ArticleDetail(props) {
  const slug = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  console.log(user);
  const { article } = useSelector((state) => state.articles.detailArticle);
  const author = article?.author?.username;
  const isEdited = user?.username === author;
  useEffect(() => {
    dispatch(fetchDetailArticles(slug));
  }, []);
  const handleEdit = () => {};
  const handleDelete = () => {};
  return (
    <div>
      <Container fluid>
        <Col>
          <Row className="bg-dark text-light">
            <Col xs={9} className="mx-auto p-5">
              <h2 className="text-uppercase fs-1 fw-bold">{article?.title}</h2>
              <Row>
                <Col className="d-flex py-5" xs={12}>
                  <Row>
                    <Col >
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
                    {isEdited ? (
                      <Col className="  my-auto px-0 d-flex gap-3">
                        <button
                          onClick={handleEdit}
                          className="btn btn-outline-secondary"
                          style={{width: "250px"}}
                        >
                          <span><EditIcon fontSize="small" className={styles.spanIcon}/></span>
                          Edit Article
                        </button>
                        <button
                          onClick={handleDelete}
                          className="btn btn-outline-primary"
                          style={{width: "250px"}}
                        >
                          <span><DeleteIcon fontSize="small" className={styles.spanIcon}/></span>
                          Delete Article ({article?.favoritesCount})
                        </button>
                      </Col>
                    ) : (
                      <Col className="  my-auto px-0 d-flex gap-3">
                        <button className="btn btn-outline-secondary mx-auto my-auto"
                        style={{width: "150px"}}>
                          <span><AddIcon fontSize="small" className={styles.spanIcon}/></span>Follow
                        </button>
                        <button className="btn btn-outline-primary" 
                        style={{width: "250px"}}>
                          <span><FavoriteIcon fontSize="small" className={styles.spanIcon}/></span>
                          Favorited article ({article?.favoritesCount})
                        </button>
                      </Col>
                    )}
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col xs={9} className="mx-auto p-5">
              <Row>
                <p>{article?.body}</p>
                <Row>
                  <div className={styles.tagList}>
                    {article?.tagList.map((tag, index) => (
                      <span key={index} className={styles.tags}>{tag}</span>
                    ))}
                  </div>
                </Row>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex p-5 justify-content-center mx-auto" xs={8}>
              <Row>
                <Col xs={12} md={4}>
                <Row className="d-flex">
                      <Col xs={1} className="my-auto">
                        <img
                          src={article?.author.image}
                          className={styles.avatar}
                          alt="avatar"
                        />
                      </Col>
                      <Col className={styles.authorDateName}>
                        <div className={styles.authorName2}>
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
                {isEdited ? (
                  <Col className="  my-auto px-0 d-flex gap-3">
                    <button className="btn btn-outline-secondary"
                    style={{width: "250px"}}>
                      <span><EditIcon fontSize="small" className={styles.spanIcon}/></span>
                      Edit Article
                    </button>
                    <button className="btn btn-outline-primary"
                    style={{width: "250px"}}>
                      <span><DeleteIcon fontSize="small" className={styles.spanIcon}/></span>
                      Delete Article ({article?.favoritesCount})
                    </button>
                  </Col>
                ) : (
                  <Col className="  my-auto px-0 d-flex gap-3">
                    <button className="btn btn-outline-secondary">
                    <span><AddIcon fontSize="small" className={styles.spanIcon}/></span>
                    Follow
                    </button>
                    <button className="btn btn-outline-primary">
                    <span><FavoriteIcon fontSize="small" className={styles.spanIcon}/></span>
                    Favorited article ({article?.favoritesCount})
                    </button>
                  </Col>
                )}
              </Row>
            </Col>
          </Row>
        </Col>
        {!user ? (
          <div className="text-center">
            <Link to={"../../login"}>Sign in</Link> or{" "}
            <Link to={"../../register"}>sign up</Link> to add comments on this
            article.
          </div>
        ) : (
          <Comment />
        )}
      </Container>
    </div>
  );
}

export default ArticleDetail;
