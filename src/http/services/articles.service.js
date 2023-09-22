import { conduitAxios, conduitAxiosCredentials } from "../axios-instance";

class ArticlesService {
  fetchAllArticles = async ({ offset, articlesPerPage }) => {
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
  fetchArticlesFolow = async ({ offset, articlesPerPage }) => {
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
      if (
        typeof localStorage !== "undefined" &&
        localStorage.getItem("token")
      ) {
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
}
export default new ArticlesService();
