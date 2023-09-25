import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import ClearIcon from "@mui/icons-material/Clear";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { createArticles } from "../../Store/actions/articles.action";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import { clearRedirect } from "../../Store/slices/articles.slice";
function CreateArticle(props) {
  const navigate = useNavigate();
  const { error } = useSelector((state) => state.articles.createArticlesData);
  const redirectUrl  = useSelector((state) => state.articles.redirectUrl);
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

  const handleAddTag = (event) => {
    event.preventDefault();
    if (tag.trim().length == 0) return;
    setInput((prev) => {
      return { ...prev, tagList: [...prev.tagList, tag] };
    });
    setTag("");
  };

  const handleRemoveTag = (indexToRemove) => {
    setInput((prev) => {
      const updatedTagList = [...prev.tagList];
      updatedTagList.splice(indexToRemove, 1);
      return { ...prev, tagList: updatedTagList };
    });
  };

  useEffect(() => {
    if (redirectUrl) {
      console.log(redirectUrl)
      navigate(redirectUrl);
      dispatch(clearRedirect());
    }
  }, [redirectUrl]);
  useEffect(() => {
    if (error) {
      toast.error("Title must be unique");
    }
  }, [error]);

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
      <Card sx={{ mt: 5 }}>
        <CardContent>
          <Typography variant="h4" align="center" gutterBottom sx={{ mb: 5 }}>
            Create article
          </Typography>
          <form
            noValidate
            className={styles.formCreateArticle}
            onSubmit={handleSubmit}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
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
                      handleAddTag(event);
                    }
                  }}
                  fullWidth
                  placeholder="Write your Tag then press enter to add"
                />
                {/* <p>{JSON.stringify(input.tagList)}</p> */}
                {input.tagList.map((tag, index) => (
                  <p key={index} className={styles.tagList}>
                    <span
                      onClick={() => handleRemoveTag(index)}
                      className={styles.iconRemoveTag}
                    >
                      {" "}
                      <ClearIcon fontSize="small" />
                    </span>{" "}
                    {tag}
                  </p>
                ))}
                <div className={styles.btnPublish}>
                  <Button type="submit" variant="contained" color="success">
                    Publish Article
                  </Button>
                </div>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
      <ToastContainer />
    </Container>
  );
}

export default CreateArticle;
