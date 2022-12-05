const axios = require("axios");
const { api } = require("@services/client");
const baseUrl = `https://donation.hamrolifebank.com/api/v1/events/stats`;
const token = {
  headers: {
    access_token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiMWUyODE1N2QyNDMyZDdmZjM1NjQ2MjA2NDgzYTA0MWI6MDU4ZWMxMDljN2QxZDZlNjFhMmUwYzI5ZjQ4YjdlNTNkZmFhY2VjMDk2ZDMyMWU0Y2YzODE0NmRiYmQwZDQ5ZDI0YTAzY2IyZjUyMjc4ZTY1ZWY5MTJlZGUwZjFlYjhmNGI2MmMyMzJlYTYyYWIzOGQyMGZjNzBjNzc5YjE1YzhkM2ViYjM0YzRkZGRmMmUwNmUwMjIxYzIxMWExZmUwNGMwOGY1ZTNjNzYzMDJmMzJjNzIzYzU0ODE0ZTkzODk4YjY4OWZjMWJlNWJlZGE3MzJkYjI2ZjIxZDVmMjFhMjYiLCJpYXQiOjE2Njk2NDcyNDAsImV4cCI6MTY3MzI0NzI0MH0.0J9LkapfzwpYoB_JYe3l0JmQ5JXwbeZXd22khNmJltk",
  },
};
const handler = async (req, res) => {
  const { slug } = req.query;
  const eventStats = await api.get(`${baseUrl}/${slug[1]}/${slug[2]}`, token);

  return res.json(eventStats.data);
};
export default handler;
