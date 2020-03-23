import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-builder-2dab1.firebaseio.com/"
});

export default instance;
