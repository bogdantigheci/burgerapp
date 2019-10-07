import axios from "axios";

const instance = axios.create({
  baseURL: "https://burgerapp-3d813.firebaseio.com/"
});

export default instance;
