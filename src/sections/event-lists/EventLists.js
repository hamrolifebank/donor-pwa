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

  const convertDateToNumber = (date) => {
    const dateArray = date.split("T")[0].split("-");
    return Number(dateArray[0] + dateArray[1] + dateArray[2]);
  };

  const filteredEvents = events.filter((event) => {
    return (
      convertDateToNumber(event.date) >=
      convertDateToNumber(new Date().toISOString())
    );
  });

  const registeredEvents = filteredEvents
    .filter((event) => {
      const found = user?.events?.find(
        (userEvent) => userEvent.id === event.id
      );
      if (found) {
        return true;
      } else {
        return false;
      }
    })
    .sort((a, b) => {
      return convertDateToNumber(a.date) - convertDateToNumber(b.date);
    });

  const notRegisteredEvents = filteredEvents
    .filter((event) => {
      const found = user?.events?.find(
        (userEvent) => userEvent.id === event.id
      );
      if (found) {
        return false;
      } else {
        return true;
      }
    })
    .sort((a, b) => {
      return convertDateToNumber(a.date) - convertDateToNumber(b.date);
    });
  // console.log(registeredEvents, notRegisteredEvents);

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
      {registeredEvents.map((event) => (
        <div key={event.id}>
          <EventCardRegistered event={event} />
        </div>
      ))}

      {notRegisteredEvents.map((event) => (
        <div key={event.id}>
          <EventCardNotRegistered event={event} />
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
