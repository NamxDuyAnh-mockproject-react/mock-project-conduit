import React from "react";
import { useEffect } from "react";
import { Col, Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetailArticles } from "../../Store/actions/articles.action";
import { loginSuccess, loginFail } from "../../Store/slices/auth.slice";
import Comment from "../Comment/Comment";
function ArticleDetail(props) {
  const slug = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  console.log(user);
  const { article } = useSelector((state) => state.articles.detailArticle);
  useEffect(() => {
    dispatch(fetchDetailArticles(slug));
  }, []);

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
                    <Col xs={4}>
                      <Row className="d-flex gap-3">
                        <Col xs={2} className="my-auto ">
                          <img
                            src={article?.author.image}
                            style={{ maxHeight: "50px" }}
                            alt=""
                          />
                        </Col>
                        <Col className=" my-auto">
                          <Link className="p-0 m-0">
                            {article?.author.username}
                          </Link>
                          <p className="p-0 m-0">
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
                    <Col className="  my-auto px-0 d-flex gap-3">
                      <button className="btn btn-outline-secondary">
                        ➕ Follow {article?.author.username}
                      </button>
                      <button className="btn btn-outline-primary">
                        💙 Favorited article ({article?.favoritesCount})
                      </button>
                    </Col>
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
                  {article?.tagList.map((tag) => {
                    return (
                      <Col key={tag} xs={1}>
                        {tag}
                      </Col>
                    );
                  })}
                </Row>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex p-5 justify-content-center mx-auto" xs={8}>
              <Row>
                <Col xs={12} md={4}>
                  <Row className="d-flex gap-3">
                    <Col xs={2} className="my-auto ">
                      <img
                        src={article?.author.image}
                        style={{ maxHeight: "50px" }}
                        alt=""
                      />
                    </Col>
                    <Col className=" my-auto">
                      <Link className="p-0 m-0">
                        {article?.author.username}
                      </Link>
                      <p className="p-0 m-0">
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
                <Col className="  my-auto px-0 d-flex gap-3">
                  <button className="btn btn-outline-secondary">
                    ➕ Follow {article?.author.username}
                  </button>
                  <button className="btn btn-outline-primary">
                    💙 Favorited article ({article?.favoritesCount})
                  </button>
                </Col>
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
