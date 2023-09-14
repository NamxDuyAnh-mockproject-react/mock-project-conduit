import { conduitAxios } from "../axios-instance";

const authService = {
  login: async ({ email, password }) => {
    try {
      const response = await conduitAxios.post("users/login", {
        user: { email, password },
      });
    
      return response.data;
    } catch (error) {
      return {
        error: error,
      };
    }
  },
};

export default authService;
