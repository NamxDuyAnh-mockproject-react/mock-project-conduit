import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { fetchAllTag } from "../../Store/actions/tag.actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import styles from "./styles.module.css";

function Tag(props) {
  const dispatch = useDispatch();
  const tags = useSelector((state) => state.tag.allTagData);

  useEffect(() => {
    dispatch(fetchAllTag());
  }, [dispatch]);
  return (
    <Col md={2}>
      <h5>Tags</h5>
      <div className={styles.tagWrapper} >
        {tags?.map((tag) => {
          return (
            <Link key={tag} to={tag} className={styles.tag}>
              {tag}
            </Link>
          );
        })}
      </div>
      
    </Col>
  );
}

export default Tag;
