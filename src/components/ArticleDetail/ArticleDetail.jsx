import React from "react";
import { useEffect } from "react";
import { Col, Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetailArticles } from "../../Store/actions/articles.action";
function ArticleDetail(props) {
  const slug = useParams();
  const dispatch = useDispatch();
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
              <Row className="align-item-center d-flex">
                <Col xs={2}>
                  <Row>
                    <Col className="my-auto" xs={3}>
                      <img
                        src={article?.author.image}
                        style={{ maxHeight: "50px" }}
                        alt=""
                      />
                    </Col>
                    <Col xs={9} className="p-3 my-auto">
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
                <Col xs={2} className="my-auto px-0">
                  <button>Follow {article?.author.username}</button>
                </Col>
                <Col className="my-auto" xs={2}>
                  <button>Favorited article ({article?.favoritesCount})</button>
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
                    return <Col xs={1}>{tag}</Col>;
                  })}
                </Row>
              </Row>
            </Col>
          </Row>
        </Col>
      </Container>
    </div>
  );
}

export default ArticleDetail;
