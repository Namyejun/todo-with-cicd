import axios from "axios";

export const SERVER = axios.create({
  baseURL: "http://13.210.155.222",
  headers: {
    "Content-Type": "application/json",
  }
});
