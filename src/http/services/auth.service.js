import { conduitAxios } from "../axios-instance";

class authService {
  login = async ({ email, password }) => {
    try {
      // Send a POST request to the "users/login" endpoint with the provided email and password.
      const response = await conduitAxios.post("users/login", {
        user: { email, password },
      });

      // Check if there was an error in the response data.
      if (response.data.error) {
        // If there is an error, return an object with an error property.
        return { error: response.data.error };
      } else {
        // If the login is successful, extract the user's token from the response data.
        const token = response.data.user.token;

        // Store the token in local storage after converting it to a JSON string.
        localStorage.setItem("token", JSON.stringify(token));

        // Return an object with the user's data.
        return { user: response.data.user };
      }
    } catch (error) {
      // If an error occurs during the login process, return an object with the error.
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
