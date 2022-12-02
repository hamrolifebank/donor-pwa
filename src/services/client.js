const axios = require("axios");

const baseURL = `/api/events`;
const getApiEvents = async () => {
  const request = await axios.get(baseURL);
  return request.data;
};

// const accessToken = getAccessToken();

// const api = axios.create({
//   //   baseURL: 'https://minimal-assets-api-dev.vercel.app',
//   baseURL: HOST_API,
//   headers: {
//     "Content-Type": "application/json",
//     accessToken,
//   },
//   paramsSerializer: (params) =>
//     qs.stringify(params, { arrayFormat: "brackets" }),
// });

// export default api;

export default getApiEvents;
