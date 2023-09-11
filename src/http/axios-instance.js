import axios from "axios";

export const conduitAxios = axios.create({
  baseURL: 'https://node-express-conduit.appspot.com/api/'
});
