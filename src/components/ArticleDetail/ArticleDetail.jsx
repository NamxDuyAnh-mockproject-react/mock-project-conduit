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
              <Row>
                <Col xs={1}>
                  <Link>profile</Link>
                </Col>
                <Col xs={1}>
                  <button>follow</button>
                </Col>
                <Col xs={1}>
                  <button>like</button>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col xs={9} className="mx-auto p-5">
              <p>{article?.body}</p>
            </Col>
          </Row>
        </Col>
      </Container>
    </div>
  );
}

export default ArticleDetail;
