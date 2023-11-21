import axios from "axios";

export const api = axios.create({
  baseURL: `https://json-server-task-and-point.onrender.com`,
  timeout: 5000,
});
