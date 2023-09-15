import { conduitAxios } from "../axios-instance";

class RegisterUser {
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

export default new RegisterUser();
