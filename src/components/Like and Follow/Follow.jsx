import React from "react";
import { useDispatch } from "react-redux";
import styles from "../ArticleDetail/styles.module.css";
import AddIcon from "@mui/icons-material/Add";
function Follow(props) {
  const author = props.author;
  console.log(author);
  const dispatch = useDispatch();
  const handleClick = () => {};
  return (
    <button className="btn btn-outline-secondary" onClick={handleClick}>
      <span>
        <AddIcon fontSize="small" className={styles.spanIcon} />
      </span>
      {author?.following ? "unfollow" : "follow"} {author?.username}
    </button>
  );
}

export default Follow;
