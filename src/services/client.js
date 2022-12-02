const axios = require("axios");

const baseURL = `/api/events`;
const getApiEvents = async () => {
  const request = await axios.get(baseURL);
  return request.data;
};

export default getApiEvents;
