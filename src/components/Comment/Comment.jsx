import React, { useEffect } from "react";
import { Col, FormGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchAllComments } from "../../Store/actions/articles.action";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import Row from "react-bootstrap/Row";
function Comment(props) {
  const slug = useParams();
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.articles.allCommentsData);
  const user = useSelector((state) => state.auth.user);
  useEffect(() => {
    console.log(slug);
    dispatch(fetchAllComments(slug));
  }, []);
  return (
    <div>
      {!user ? (
        <div className="text-center">
          <Link to={"../../login"}>Sign in</Link> or{" "}
          <Link to={"../../register"}>sign up</Link> to add comments on this
          article.
        </div>
      ) : (
        <Row>
          <Col xs={8} md={6} className="mx-auto">
            <Form>
              <Form.Control as="textarea" aria-label="With textarea" />
            </Form>
          </Col>
        </Row>
      )}
    </div>
  );
}

export default Comment;
