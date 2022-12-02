const axios = require("axios");
import { useEffect } from "react";

import { HOST_API } from "../config";

const baseURL = `/api/events`;
export const getApiEvents = async () => {
  const request = await axios.get(baseURL);
  return request.data;
};

export default getApiEvents;
