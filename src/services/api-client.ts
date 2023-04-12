import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "c99fbf24864a48329921579e33911fa8",
  },
});
