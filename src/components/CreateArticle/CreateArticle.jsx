import React, { useState } from "react";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import { Card, CardContent, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { createArticles } from "../../Store/actions/articles.action";
import styles from "./styles.module.css";

function CreateArticle(props) {
  const [input, setInput] = useState({
    title: "",
    description: "",
    body: "",
    tagList: [],
  });
  const [tag, setTag] = useState("");
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleAddTag = () => {
    setInput((prev) => {
      return { ...prev, tagList: [...prev.tagList, tag] };
    });
    setTag("");
  };

  const validateForm = () => {
    const newErrors = {};
    if (!input.title) {
      newErrors.title = "Please choose a title.";
    }
    if (!input.description) {
      newErrors.description = "Please choose a description.";
    }
    if (!input.body) {
      newErrors.body = "Please choose a content.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      const config = { articles: input };
      dispatch(createArticles(config));
    }
  };

  return (
    <Container>
      <Card sx={{mt:5}}>
        <CardContent>
        <Typography variant="h4" align="center" gutterBottom sx={{mb: 5}}>
            Create article
          </Typography>
          <form noValidate className={styles.formCreateArticle} onSubmit={handleSubmit}>
          <TextField
            required
            fullWidth
            label="Article Title"
            type="text"
            className={styles.input}
            value={input.title}
            name="title"
            onChange={(e) => handleInput(e)}
            error={!!errors.title}
            helperText={errors.title}
          />
          <TextField
            required
            fullWidth
            label="What's this article about?"
            type="text"
            className={styles.input}
            value={input.description}
            name="description"
            onChange={(e) => handleInput(e)}
            error={!!errors.description}
            helperText={errors.description}
          />
          <TextField
            required
            fullWidth
            label="Write your article (in mark down)"
            multiline
            className={styles.input}
            rows={3}
            value={input.body}
            name="body"
            onChange={(e) => handleInput(e)}
            error={!!errors.body}
            helperText={errors.body}
          />
          <TextField
            type="text"
            label="Enter tags"
            value={tag}
            name="tagList"
            onChange={(e) => setTag(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleAddTag();
              }
            }}
            fullWidth
            placeholder="Write your Tag then press enter to add"
          />
          <div className={styles.btnPublish}>
            <Button type="submit" variant="contained" color="success">
              Publish Article
            </Button>
          </div>
        </form>
        </CardContent>
      </Card>
      
    </Container>
  );
}

export default CreateArticle;
