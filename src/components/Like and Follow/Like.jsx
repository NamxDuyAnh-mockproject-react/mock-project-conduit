import React from "react";
import { useDispatch } from "react-redux";
import {
  favoritedArticles,
  unfavoritedArticles,
} from "../../Store/actions/articles.action";
import FavoriteIcon from "@mui/icons-material/Favorite";
function Like({ article }) {
  const dispatch = useDispatch();

  const handleLike = ({ slug, favorited, favoritesCount }) => {
    if (favorited === false) {
      dispatch(favoritedArticles({ slug }));
    } else if (favorited === true) {
      dispatch(unfavoritedArticles({ slug }));
    }
  };

  return (
    <button
      onClick={() => handleLike(article)}
      className="btn btn-outline-success"
    >
      <span>
        <FavoriteIcon />
      </span>
      {article?.favoritesCount}
    </button>
  );
}

export default Like;
