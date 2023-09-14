import axios from "axios";

export const conduitAxios = axios.create({
  baseURL: "https://api.realworld.io/api/",
});
