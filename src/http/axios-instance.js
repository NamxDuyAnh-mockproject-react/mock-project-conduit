import axios from "axios";

export const conduitAxios = axios.create({
  baseURL: "https://api.realworld.io/api/",
});
export const conduitAxiosCredentials = axios.create({
  baseURL: "https://api.realworld.io/api/",
});
conduitAxiosCredentials.interceptors.request.use(
  function (config) {
   
    const token = JSON.parse(localStorage.getItem("token"));
    if (token) {
      config.headers["Authorization"] = `Token ${token}`;
    }
    return config;
  },
  function (error) {
    // Làm gì đó với lỗi request
    return Promise.reject(error);
  }
);
