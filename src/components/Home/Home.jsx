import React from "react";
import { useEffect } from "react";
import { Col, Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllArticles,
  fetchDetailArticles,
} from "../../Store/actions/articles.action";
import Tag from "../Tag/Tag";
import { Link } from "react-router-dom";
const Home = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles.allArticlesData);

  useEffect(() => {
    dispatch(fetchAllArticles());
  }, [dispatch]);

  return (
    <>
      <Container>
        <Row>
          <Col md={9}>
            {articles?.map((article) => {
              return (
                <div key={article.slug}>
                  <Link to={`../articles/${article.slug}`}>
                    <Row className="article-preview">
                      <Row>
                        <Col>
                          <img src={article.author.image} alt="" />
                        </Col>

                        <Col>{article.author.username}</Col>

                        <Col>favorites</Col>
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
              );
            })}
          </Col>

          <Tag />

        </Row>
      </Container>
    </>
  );
};


export default Home;

