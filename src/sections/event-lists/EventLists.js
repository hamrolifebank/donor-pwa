import React from "react";
import PropTypes from "prop-types";
import DashboardlayoutwithFooter from "@layouts/dashboard/DashboardlayoutwithFooter";

import {
  EventCardRegistered,
  EventCardNotRegistered,
} from "@components/event-card";
import { Container, Typography } from "@mui/material";
import { useAppContext } from "@contexts/AppContext";
import Link from "next/link";
import { useAppAuthContext } from "@contexts/AuthContext";

export default function EventsPage(props) {
  const { events } = useAppContext();
  const { user } = useAppAuthContext();
  console.log(user);

  const registeredEvents = events.filter((event) => {
    if (user) {
      return event.phone === user.phone;
    }
  });
  const notRegisteredEvents = events.filter((event) => {
    if (user) {
      return event.phone !== user.phone;
    }
  });
  console.log(registeredEvents, notRegisteredEvents);

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

      {registeredEvents.length > 0 &&
        registeredEvents.map((event) => {
          <div key={event.id}>
            <Link
              href={`/events/${event.id}`}
              style={{ textDecoration: "none" }}
            >
              <EventCardRegistered event={event} />
            </Link>
          </div>;
        })}

      {notRegisteredEvents.map((event) => (
        <div key={event.id}>
          <Link href={`/events/${event.id}`} style={{ textDecoration: "none" }}>
            <EventCardNotRegistered event={event} />
          </Link>
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
