const axios = require("axios");
import { useEffect } from "react";

import { HOST_API } from "../config";

const baseURL = `${HOST_API}/events`;
const getApi = async () => {
  const request = await axios.get(baseURL);
  return request.data;
};
export default getApi;
