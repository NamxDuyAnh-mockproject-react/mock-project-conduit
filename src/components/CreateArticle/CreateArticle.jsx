import React from "react";
import { Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess, loginFail } from "../../Store/slices/auth.slice";
import { useEffect, useState } from "react";
import { createArticles } from "../../Store/actions/articles.action";
function CreateArticle(props) {
  const [validated, setValidated] = useState(false);
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    title: "",
    description: "",
    body: "",
    tagList: [],
  });
  const [tag, setTag] = useState("");
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    if (token) {
      dispatch(loginSuccess({ user: { token } }));
    }
  }, [dispatch]);
  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    const config = { articles: input };

    dispatch(createArticles(config));

    setValidated(true);
  };
  const handleAddTag = () => {
    setInput((prev) => {
      return { ...prev, tagList: [...prev.tagList, tag] };
    });
    setTag("");
  };
  return (
    <Container>
      <Form noValidate validated={validated}>
        <Form.Group className="mb-3">
          <Form.Label>Article Title</Form.Label>
          <Form.Control
            required
            type="text"
            value={input.title}
            name="title"
            onChange={(e) => handleInput(e)}
          />
          <Form.Control.Feedback type="invalid">
            Please choose a title.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>What's this article about?</Form.Label>
          <Form.Control
            required
            type="text"
            value={input.description}
            name="description"
            onChange={(e) => handleInput(e)}
          />
          <Form.Control.Feedback type="invalid">
            Please choose a description.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Write your article (in mark down)</Form.Label>
          <Form.Control
            required
            as="textarea"
            rows={3}
            value={input.body}
            name="body"
            onChange={(e) => handleInput(e)}
          />
          <Form.Control.Feedback type="invalid">
            Please choose a content.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Enter Tags</Form.Label>
          <Form.Control
            type="text"
            value={tag}
            name="tagList"
            onChange={(e) => setTag(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleAddTag();
              }
            }}
            placeholder="Write your Tag then press enter to add"
          />
        </Form.Group>
        <p>{JSON.stringify(input.tagList)}</p>
        <Button onClick={(e) => handleSubmit(e)}>Publish Article</Button>
      </Form>
    </Container>
  );
}

export default CreateArticle;
