const { api } = require("./client");

const EventService = {
  getEvents: (req, res) => api.get("/events"),
  getSingleEvent: (id, type) => api.get(`/events/stats/${id}/${type}`),
};

export default EventService;
