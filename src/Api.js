import axios from "axios";
import { baseApiUrl, token } from "./global";

const api = axios.create({
  baseURL: `${baseApiUrl}`,
  headers: {
    'Authorization' : `Bearer ${token}`
  }
});



  export default api;