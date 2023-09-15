import { conduitAxios } from "../axios-instance";

class ArticlesService {
  fetchAllArticles = async () => {
    try {
      const res = await conduitAxios.get("/articles");
      return res.data.articles;
    } catch (error) {
      return {
        error: error,
      };
    }
  };
  createArticles = async ({ config }) => {
    try {
      const res = await conduitAxios.post("/articles", config);
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

  fetchAllComment = async ({ slug }) => {
    try {
      console.log(slug)
      const res = await conduitAxios.get(`/articles/${slug}/comments`);

      return res.data;
    } catch (error) {
      return {
        error: error,
      };
    }
  };

}
export default new ArticlesService();
