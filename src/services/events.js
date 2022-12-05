const { api } = require("./client");

const EventService = {
  getEvents: () => api.get("/events"),
  getStats: (id, type) => api.get(`/events/stats/${id}/${type}`),
};

export default EventService;
