const axios = require("axios");

const baseURL = `https://donation.hamrolifebank.com/api/v1/events`;
const eventHandler = async (req, res) => {
  const { slug } = req.query;

  const events = await axios.get(`${baseURL}/stats/${slug[1]}/${slug[2]}`, {
    headers: {
      access_token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiMWUyODE1N2QyNDMyZDdmZjM1NjQ2MjA2NDgzYTA0MWI6MDU4ZWMxMDljN2QxZDZlNjFhMmUwYzI5ZjQ4YjdlNTNkZmFhY2VjMDk2ZDMyMWU0Y2YzODE0NmRiYmQwZDQ5ZDI0YTAzY2IyZjUyMjc4ZTY1ZWY5MTJlZGUwZjFlYjhmNGI2MmMyMzJlYTYyYWIzOGQyMGZjNzBjNzc5YjE1YzhkM2ViYjM0YzRkZGRmMmUwNmUwMjIxYzIxMWExZmUwNGMwOGY1ZTNjNzYzMDJmMzJjNzIzYzU0ODE0ZTkzODk4YjY4OWZjMWJlNWJlZGE3MzJkYjI2ZjIxZDVmMjFhMjYiLCJpYXQiOjE2Njk2NDcyNDAsImV4cCI6MTY3MzI0NzI0MH0.0J9LkapfzwpYoB_JYe3l0JmQ5JXwbeZXd22khNmJltk",
    },
  });

  return res.json(events.data);
};
export default eventHandler;
