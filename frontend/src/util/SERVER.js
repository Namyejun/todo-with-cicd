import axios from "axios";

export const SERVER = axios.create({
  baseURL: "http://127.0.0.1:18080/api/todos",
  headers: {
    "Content-Type": "application/json",
  }
});
