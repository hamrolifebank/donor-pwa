import React, { useState } from "react";

import {
  EventCardRegistered,
  EventCardNotRegistered,
} from "@components/event-card";
import { Container, Typography } from "@mui/material";
import { useAppContext } from "@contexts/AppContext";
import Link from "next/link";
import { useAppAuthContext } from "@contexts/AuthContext";
import { useRouter } from "next/router";
import { PATH_EVENTS } from "@routes/paths";

export default function EventsPage(props) {
  let NO_OF_EVENTS_TO_SHOW = 5;
  props.page === "home" ? (NO_OF_EVENTS_TO_SHOW = 3) : null;

  const [noOfEventsToDisplay, setNoOfEventsToDisplay] =
    useState(NO_OF_EVENTS_TO_SHOW);
  const { events } = useAppContext();
  const { user } = useAppAuthContext();
  const { push } = useRouter();

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
      {registeredEvents
        .map((event) => (
          <div key={event.id}>
            <Link
              href={`/events/${event.id}`}
              style={{ textDecoration: "none" }}
            >
              <EventCardRegistered event={event} />
            </Link>
          </div>
        ))
        .concat(
          notRegisteredEvents.map((event) => (
            <div key={event.id}>
              <Link
                href={`/events/${event.id}`}
                style={{ textDecoration: "none" }}
              >
                <EventCardNotRegistered event={event} />
              </Link>
            </div>
          ))
        )
        .slice(0, noOfEventsToDisplay)}

      {props.page === "home" ? (
        <Typography
          variant="h6"
          component="h2"
          sx={{ color: "primary.main", textAlign: "center" }}
          onClick={() => push(PATH_EVENTS.root)}
        >
          Load more events
        </Typography>
      ) : (
        <Typography
          variant="h6"
          component="h2"
          sx={{ color: "primary.main", textAlign: "center" }}
          onClick={() =>
            setNoOfEventsToDisplay(noOfEventsToDisplay + NO_OF_EVENTS_TO_SHOW)
          }
        >
          Load more events
        </Typography>
      )}
    </Container>
  );
}
