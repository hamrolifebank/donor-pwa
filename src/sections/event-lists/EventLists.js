import React from "react";
import PropTypes from "prop-types";
import DashboardlayoutwithFooter from "@layouts/dashboard/DashboardlayoutwithFooter";

import { EventCard } from "@components/event-card";
import { Container, Typography } from "@mui/material";
import { useAppContext } from "@contexts/AppContext";

export default function EventsPage(props) {
  const { events } = useAppContext();
  return (
    <Container display="flex">
      <Typography
        sx={{
          mb: 1,
          fontSize: "subtitle1.fontSize",
          fontWeight: "subtitle1.fontWeight",
          textAlign: "center",
          textTransform: "uppercase",
          color: "grey.600",
        }}
      >
        Events near you
      </Typography>

      {events.map((event) => (
        <div key={event.id}>
          <EventCard event={event} />
        </div>
      ))}
      <Typography
        variant="h6"
        component="h2"
        sx={{ color: "primary.main", textAlign: "center" }}
      >
        Load more events
      </Typography>
    </Container>
  );
}
