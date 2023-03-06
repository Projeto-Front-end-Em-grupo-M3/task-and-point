import axios from "axios";

export const api = axios.create({
  baseURL: `https://point-and-tasks.onrender.com`,
  timeout: 5000,
});
