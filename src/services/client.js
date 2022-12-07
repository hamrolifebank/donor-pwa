const axios = require("axios");
const baseURL = `/api`;
export const api = axios.create({
  baseURL,
});
