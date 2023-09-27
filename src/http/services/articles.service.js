import { conduitAxios, conduitAxiosCredentials } from "../axios-instance";

class ArticlesService {
  fetchAllArticles = async ({ offset, articlesPerPage }) => {
    console.log(offset);
    try {
      const res = await conduitAxios.get(
        `/articles?offset=${offset}&limit=${articlesPerPage}`
      );

      return res.data;
    } catch (error) {
      return {
        error: error,
      };
    }
  };
  fetchArticlesFollow = async ({ offset, articlesPerPage }) => {
    console.log(offset);
    try {
      const res = await conduitAxiosCredentials.get(
        `/articles/feed?offset=${offset}&limit=${articlesPerPage}`
      );

      return res.data;
    } catch (error) {
      return {
        error: error,
      };
    }
  };
  createArticles = async ({ articles }) => {
    try {
      const config = { article: articles };

      const res = await conduitAxiosCredentials.post("/articles", config);
      return res.data;
    } catch (error) {
      return {
        error: error,
      };
    }
  };
  fetchDetailArticles = async ({ slug }) => {
    try {
      const res = await conduitAxios.get(`/articles/${slug}`);

      return res.data;
    } catch (error) {
      return {
        error: error,
      };
    }
  };
  addNewComment = async ({ slug, input }) => {
    try {
      const config = {
        comment: {
          body: input,
        },
      };

      const res = await conduitAxiosCredentials.post(
        `/articles/${slug.slug}/comments`,
        config
      );

      return res;
    } catch (error) {
      console.log(error);
    }
  };
  fetchAllComment = async ({ slug }) => {
    try {
      let token;
      if (localStorage.getItem("token")) {
        try {
          token = JSON.parse(localStorage.getItem("token"));
        } catch (error) {
          console.log(error);
        }
      }

      const config = {
        headers: {
          Authorization: `Token ${token}`,
        },
      };

      const res = await conduitAxios.get(`/articles/${slug}/comments`, config);

      return res.data;
    } catch (error) {
      return {
        error: error,
      };
    }
  };
  fetchMyArticles = async ({ offset, articlesPerPage, user }) => {
    console.log(offset);
    try {
      const res = await conduitAxiosCredentials.get(
        `/articles?author=${user}&offset=${offset}&limit=${articlesPerPage}`
      );

      return res.data;
    } catch (error) {
      return {
        error: error,
      };
    }
  };
  fetchFavoritedArticles = async ({ offset, articlesPerPage, user }) => {
    console.log(offset);
    try {
      const res = await conduitAxiosCredentials.get(
        `/articles?favorited=${user}&offset=${offset}&limit=${articlesPerPage}`
      );

      return res.data;
    } catch (error) {
      return {
        error: error,
      };
    }
  };
  fetchTagArticles = async ({ offset, articlesPerPage, tag }) => {
    console.log(tag);
    try {
      const res = await conduitAxiosCredentials.get(
        `/articles?offset=${offset}&limit=${articlesPerPage}&tag=${tag}`
      );

      return res.data;
    } catch (error) {
      return {
        error: error,
      };
    }
  };
  deleteArticles = async ({ slug }) => {
    console.log(slug);
    try {
      const res = await conduitAxiosCredentials.delete(`/articles/${slug}`);
      console.log(res);
      return res.data;
    } catch (error) {
      return {
        error: error,
      };
    }
  };
  favoritedArticles = async ({ slug }) => {
    console.log(slug);
    try {
      const res = await conduitAxiosCredentials.post(
        `/articles/${slug}/favorite`
      );
      console.log(res);
      return res.data;
    } catch (error) {
      return {
        error: error,
      };
    }
  };
  unFavoritedArticles = async ({ slug }) => {
    console.log(slug);
    try {
      const res = await conduitAxiosCredentials.delete(
        `/articles/${slug}/favorite`
      );
      console.log(res);
      return res.data;
    } catch (error) {
      return {
        error: error,
      };
    }
  };
}
export default new ArticlesService();
