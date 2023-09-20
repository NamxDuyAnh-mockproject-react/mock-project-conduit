import React, { useEffect, useState } from "react";
import { Col, FormGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchAllComments,
  addComments,
} from "../../Store/actions/articles.action";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import { Card } from "react-bootstrap";

function Comment(props) {
  const slug = useParams();
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.articles.allCommentsData);
  const [input, setInput] = useState("");

  const handdleAddComment = (e) => {
    e.preventDefault();
    dispatch(addComments({ slug, input }));
    setInput("");
  };
  useEffect(() => {
   
    dispatch(fetchAllComments(slug));
  }, []);
  return (
    <div>
      
      <Row>
        <Col xs={8} md={6} className="mx-auto">
          <Form>
            <Col>
              <Form.Control
                as="textarea"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                aria-label="With textarea"
              />
            </Col>
            <Col xs={12}>
              <Row className="p-3 d-flex align-item-center">
                <Col>
                  <TagFacesIcon />
                </Col>
                <Col className="d-flex justify-content-end">
                  <Button
                    className="text-end"
                    type="submit"
                    onClick={(e) => handdleAddComment(e)}
                  >
                    submit
                  </Button>
                </Col>
              </Row>
              <Row>
                {comments?.map((comment) => {
                  return (
                    <Card key={comment.id} border="light">
                      <Card.Body>
                        <Card.Text>{comment.body}</Card.Text>
                      </Card.Body>
                      <Card.Footer>
                        <TagFacesIcon />
                      </Card.Footer>
                    </Card>
                  );
                })}
              </Row>
            </Col>
          </Form>
        </Col>
      </Row>
      
    </div>
  );
}

export default Comment;
