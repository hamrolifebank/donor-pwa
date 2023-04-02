const axios = require("axios");

const baseURL = `https://donation.hamrolifebank.com/api/v1/events`;
const handler = async (req, res) => {
  const events = await axios.get(baseURL, {
    headers: {
      access_token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiYzEwOWY3ZDcxMzU0ZDQ5M2QxNjdlMDBkNjA4ZWYxNGU6NzRjNjc5ZTQ1ZjBiYzg4NDNkMzU3NDNlMzk3Y2I0NjExMTIzOTIyYjU3YTM0M2U5NzJjNTJjOTk2N2Q5YTQwMDg3YjM0ZjZmMjRhY2YwMjg5NTZmMDhkNTYwNTY1ODgxYWEzMzVmZmEyYTc3MDJkNTZiMWNjN2ZjM2Q2MDIzOGQ3NGNjYjhiNTUxOTY4YTBiN2I0OWIyYWQxNWI3Yjg4N2QzZDg2MGJjNzIzZTk3OGZhYmRjMzI3YWM0NDQyZDMyODk5Yzk3YmZiNTQ1MzFkMjFlZjRjNDJkYjliOWE0ZDUiLCJpYXQiOjE2ODA0MjMxNDQsImV4cCI6MTY4NDAyMzE0NH0.FA0jyR06MLQb2GmP-u8gVUKRvtvPrIgcGgrXdzcXUEs",
    },
  });

  return res.json(events.data.data);
};
export default handler;
