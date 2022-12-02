const axios = require("axios");

const baseUrl = `https://donation.hamrolifebank.com/api/v1/events`;
const token = {
  headers: {
    access_token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiMWUyODE1N2QyNDMyZDdmZjM1NjQ2MjA2NDgzYTA0MWI6MDU4ZWMxMDljN2QxZDZlNjFhMmUwYzI5ZjQ4YjdlNTNkZmFhY2VjMDk2ZDMyMWU0Y2YzODE0NmRiYmQwZDQ5ZDI0YTAzY2IyZjUyMjc4ZTY1ZWY5MTJlZGUwZjFlYjhmNGI2MmMyMzJlYTYyYWIzOGQyMGZjNzBjNzc5YjE1YzhkM2ViYjM0YzRkZGRmMmUwNmUwMjIxYzIxMWExZmUwNGMwOGY1ZTNjNzYzMDJmMzJjNzIzYzU0ODE0ZTkzODk4YjY4OWZjMWJlNWJlZGE3MzJkYjI2ZjIxZDVmMjFhMjYiLCJpYXQiOjE2Njk2NDcyNDAsImV4cCI6MTY3MzI0NzI0MH0.0J9LkapfzwpYoB_JYe3l0JmQ5JXwbeZXd22khNmJltk",
  },
};
// {
//   getEvents: () => api.get("/events"),
//   getSingleEvent: (id, type) => api.get(`/events/stats/${id}/${type}`),
// };

// export async function bloodgroupHandler(req, res) {
//   const { slug } = req.query;

//   const events = await axios.get(`${baseUrl}/stats/${slug[1]}/bloodgroup`, {
//     token,
//   });
//   console.log(events.data);
//   return res.json(events.data);
// }

// export async function ageHandler(req, res) {
//   const { slug } = req.query;

//   const events = await axios.get(`${baseUrl}/stats/${slug[1]}/age`, token);
//   console.log(events.data);
//   return res.json(events.data);
// }

// export async function genderHandler(req, res) {
//   const { slug } = req.query;

//   const events = await axios.get(`${baseUrl}/stats/${slug[1]}/gender`, token);
//   console.log(events.data);
//   return res.json(events.data);
// }
// const eventHandler = async (req, res) => {
//   return { bloodGroup, age, gender };
// };
// export default eventHandler;

// const { slug } = req.query;
// export async function getServerSideProps(context) {
//   const bgUrl = `${baseUrl}/stats/${slug[1]}/bloodgroup`;
//   const ageUrl = `${baseUrl}/stats/${slug[1]}/age`;
//   const genderUrl = `${baseUrl}/stats/${slug[1]}/gender`;
// }

// switch (slug[2]) {
//   case slug[2] === "bloodgroup":
//     url = bgUrl;
//   case slug[2] === "age":
//     url = ageUrl;
//   case slug[2] === "gender":
//     url = genderUrl;
// }

// const data = await axios.get(`${baseUrl}/stats/${slug[1]}/bloodgroup`, token);
// const [bloodGroupRes, ageRes, genderRes] = await Promise.all([
//   fetch(bgUrl, token),
//   fetch(ageUrl, token),
//   fetch(genderUrl, token),
// ]);
// let [bloodGroup, age, gender] = await Promise.all([
//   bloodGroupRes.json(),
//   ageRes.json(),
//   genderRes.json(),
// ]);

//   res.json(data);
//   console.log(data);
// };
// export default eventHandler;
