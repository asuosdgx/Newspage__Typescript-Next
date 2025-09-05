import axios from "axios";

const newsAPI = axios.create({
  baseURL: process.env.NEWS_API_URL,
  headers: {
    Authorization: `Bearer ${process.env.NEWS_API_KEY}`,
    "Content-Type": "application/json;charset=utf-8",
  },
});
export default newsAPI;
