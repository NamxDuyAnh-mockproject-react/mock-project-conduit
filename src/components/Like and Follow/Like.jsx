import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  favoritedArticles,
  unfavoritedArticles,
} from "../../Store/actions/articles.action";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { toggleArticleFavorite } from "../../Store/slices/articles.slice";
function Like({ article }) {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.article?.allArticlesData);
  const handleLike = ({ slug, favorited, favoritesCount }) => {
    if (favorited === false) {
      dispatch(favoritedArticles({ slug }));
      dispatch(toggleArticleFavorite({ slug, favorited:!favorited }));
    } else if (favorited === true) {
      dispatch(unfavoritedArticles({ slug }));
      dispatch(toggleArticleFavorite({ slug, favorited:!favorited }));
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
