import { conduitAxios } from "../axios-instance";

class authService {
  login = async ({ email, password }) => {
    try {
      const response = await conduitAxios.post("users/login", {
        user: { email, password },
      });
    
      return response.data;
    } catch (error) {
      console.log(error);
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
      console.log(response);
      return response.data;
    } catch (error) {
      return {
        error: error,
      };
    }
  };
}

export default new authService();
