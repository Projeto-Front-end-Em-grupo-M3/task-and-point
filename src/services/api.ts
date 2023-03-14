import axios from "axios";

export const api = axios.create({
  baseURL: `http://localhost:3001`,
  //baseURL: `https://point-and-tasks.onrender.com`,
  timeout: 5000,
});
