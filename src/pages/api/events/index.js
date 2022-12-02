const axios = require("axios");

const baseURL = `https://donation.hamrolifebank.com/api/v1/events`;
const handler = async (req, res) => {
  const events = await axios.get(baseURL, {
    headers: {
      access_token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiODc1YzdmNDA1ZWU3YTQwNDkzMTU3Mzg0OGNhMzFkNDM6MDAxZmE4MmQyOGE4MDRmM2NhZDQ0MjY0MzNkZjJmMTRlZDdjZjYyZjUwYTVhNTFiYmMzYzFmYjVmMDgyNjE3NGVmOTJhN2Y3ZGZkNDAyMTQxMGUyMzM0Y2Y5OTMyZjZkMjZiYWU2ZDZmM2ZlMTBmMDc4ZWUxMTM2ZWZiNzc3NmRlMWI1OTQ1YzQyNzJlNTBlNWRlZGIxNDdmZTgxMjIzMjc3YzhkMzNjOTc4NGI3MGNhNzg4YzNkZmY3MzUwMDA5NTljZTlkOTgzMGFmYWVjOTgxMDBjNjIwNWY5OGZjNDIiLCJpYXQiOjE2Njk3MDYyODQsImV4cCI6MTY3MzMwNjI4NH0.fef71GHUvzyF_aRpokC-0sPQeVJJnQz8ounBSveLlAE",
    },
  });

  return res.json(events.data.data);
};
export default handler;

// const axios = require("axios");

// const baseURL = `https://donation.hamrolifebank.com/api/v1/events`;
// const handler = ({ data }) => {
//   return data;
// };
// export default handler;
// export async function getServerSideProps() {
//   const res = await fetch(baseURL, {
//     headers: {
//       access_token:
//         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiODc1YzdmNDA1ZWU3YTQwNDkzMTU3Mzg0OGNhMzFkNDM6MDAxZmE4MmQyOGE4MDRmM2NhZDQ0MjY0MzNkZjJmMTRlZDdjZjYyZjUwYTVhNTFiYmMzYzFmYjVmMDgyNjE3NGVmOTJhN2Y3ZGZkNDAyMTQxMGUyMzM0Y2Y5OTMyZjZkMjZiYWU2ZDZmM2ZlMTBmMDc4ZWUxMTM2ZWZiNzc3NmRlMWI1OTQ1YzQyNzJlNTBlNWRlZGIxNDdmZTgxMjIzMjc3YzhkMzNjOTc4NGI3MGNhNzg4YzNkZmY3MzUwMDA5NTljZTlkOTgzMGFmYWVjOTgxMDBjNjIwNWY5OGZjNDIiLCJpYXQiOjE2Njk3MDYyODQsImV4cCI6MTY3MzMwNjI4NH0.fef71GHUvzyF_aRpokC-0sPQeVJJnQz8ounBSveLlAE",
//     },
//   });
//   const data = await res.json();
//   return {
//     props: { data },
//   };
// }
