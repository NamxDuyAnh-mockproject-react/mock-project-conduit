import { conduitAxios } from "../axios-instance";

class authService {
  login = async ({ email, password }) => {
    try {
      const response = await conduitAxios.post("users/login", {
        user: { email, password },
      });
      if (response.data.error) {
        console.log(response)
        return { error: response.data.error };
      } else {
        const token = response.data.user.token;
        localStorage.setItem("token", JSON.stringify(token));
        return { user: response.data.user };
      }
    } catch (error) {
      return {
        error: error,
      };
    }
  };

  fetchRegisterUser = async (userData) => {
    try {
      const response = await conduitAxios.post("users", {
        user: userData,
      });

      const token = response.data.user.token;
      localStorage.setItem("token", JSON.stringify(token));

      return response.data;
    } catch (error) {
      return {
        error: error,
      };
    }
  };
}

export default new authService();
