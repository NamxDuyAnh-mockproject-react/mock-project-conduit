import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { fetchAllTag } from "../../Store/actions/tag.actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
function Tag(props) {
  const dispatch = useDispatch();
  const tags = useSelector((state) => state.tag.allTagData);

  useEffect(() => {
    dispatch(fetchAllTag());
  }, [dispatch]);
  return (
    <Col md={3}>
      <h3>Tags</h3>
      {tags?.map((tag) => {
        return (
          <Link key={tag} variant="secondary">
            {tag}
          </Link>
        );
      })}
    </Col>
  );
}

export default Tag;
