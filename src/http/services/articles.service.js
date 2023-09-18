import { conduitAxios ,conduitAxiosCredentials} from "../axios-instance";

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
      console.log(res);
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
      console.log(res.data);

      return res.data;
    } catch (error) {
      return {
        error: error,
      };
    }
  };
}
export default new ArticlesService();
