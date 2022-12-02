const axios = require("axios");

const baseURL = `/api`;
// const getEvents = async () => {
//   const request = await axios.get(baseURL);
//   return request.data;
// };

export const api = axios.create({
  baseURL,
});

// export async function getApiStatsBloodgroup() {
//   const request = await axios.get(
//     `${baseURL}/stats/63888283c5c26664e4c7f430/bloodgroup`
//   );
//   console.log("hello", request.data);
//   return request.data;
// }

// export async function getApiStatsAge() {
//   const request = await axios.get(
//     `${baseURL}/stats/63888283c5c26664e4c7f430/age`
//   );
//   console.log("hello", request.data);
//   return request.data;
// }

// export async function getApiStatsGender() {
//   const request = await axios.get(
//     `${baseURL}/stats/63888283c5c26664e4c7f430/gender`
//   );
//   console.log("hello", request.data);
//   return request.data;
// }

// export getEvents,{ getApiStats };
// export default getEvents;
