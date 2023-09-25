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
import { Card } from "react-bootstrap";
import DeleteIcon from '@mui/icons-material/Delete';

function Comment(props) {
  const slug = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
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
          <Form className="card bg-light">
              <Form.Control
                className="p-3"
                placeholder="Write a comment..."
                as="textarea"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                aria-label="With textarea"
              />
              <Row className="p-3 d-flex align-item-center  card-footer" style={{width: "100%", marginLeft:"0px"}}>
                <Col>
                  <img src={user.image} alt="" />
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
          </Form>

            <Col xs={12} style={{marginBottom: "100px"}}>
              <Row>
                {comments?.map((comment) => {
                  return (
                    // <Card key={comment.id}>
                    //   <Card.Body>
                    //     <Card.Text>{comment.body}</Card.Text>
                    //   </Card.Body>
                    //   <Card.Footer>
                    //   <Link to="/profile">
                    //     <img src={user.image} alt="" />
                    //     {user.username}
                    //     </Link>
                    //     <span>
                    //     {comments?.createdAt
                    //         ? new Date(comments?.createdAt).toLocaleDateString(
                    //             "en-US",
                    //             {
                    //               month: "long",
                    //               day: "numeric",
                    //               year: "numeric",
                    //             }
                    //           )
                    //         : ""}
                    //     </span>
                    //   </Card.Footer>
                    // </Card>
                    <Form className="card p-0" key={comment.id} style={{width:"96%", marginLeft:"12px", marginTop: "15px"}}>
                      <Card.Text className="p-3 mb-0">{comment.body}</Card.Text>
                      <Row className="p-3 d-flex align-item-center bg-light card-footer" style={{width: "100%", marginLeft:"0px"}}>
                        <Col>
                          <Link style={{fontSize:"0.8em", color:"#5CB85C", textDecoration: "none"}}>
                            <img src={user.image} alt="avatar" />
                            {user.username}
                            
                          </Link>
                          <p>
                          {comments?.createdAt
                            ? new Date(comments?.createdAt).toLocaleDateString(
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
                        <Col xs={3} className="d-flex justify-content-end">
                        <span><DeleteIcon fontSize="small"/></span>
                        </Col>
                      </Row>
                  </Form>
                  );
                })}
              </Row>
            </Col>
        </Col>
      </Row>
      
    </div>
  );
}

export default Comment;
