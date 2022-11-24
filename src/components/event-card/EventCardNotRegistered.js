import React from "react";
import PropTypes from "prop-types";
import { Box, Button, Paper, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import { Icon } from "@iconify/react";
import { PrimaryButton } from "@components/Button";
import { useAppAuthContext } from "@contexts/AuthContext";
import Link from "next/link";

const EventCardNotRegistered = ({ event }) => {
  const theme = useTheme();
  const { user, addUser } = useAppAuthContext();

  const handleRegister = (e) => {
    // event.currentTarget == event.target

    console.log(user);
    const eventDetail = {
      id: event.id,
      name: event.name,
      date: event.date,
      location: event.location,
      isRegistered: true,
      isDonated: false,
      isVerified: false,
    };
    user.events.push(eventDetail);
    addUser(user);
  };
  return (
    <>
      <Paper
        sx={{
          display: "flex",
          mb: 2,
          justifyContent: "space-between",

          padding: "12px 20px 12px 12px",

          backgroundColor: "grey.200",
        }}
      >
        <Box>
          <Link href={`/events/${event.id}`} style={{ textDecoration: "none" }}>
            <Typography
              sx={{
                color: "black",
                fontSize: "subtitle1.fontSize",
                fontWeight: "subtitle1.fontWeight",
                lineHeight: "subtitle1.lineHeight",
              }}
            >
              {event.name}
            </Typography>
            <Typography
              sx={{
                fontSize: "subtitle2.fontSize",
                color: "grey.600",
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <Icon icon="mdi:clock-time-eight-outline" />
              {event.date.slice(0, 10)}
            </Typography>

            <Typography
              sx={{
                fontSize: "subtitle2.fontSize",
                display: "flex",
                gap: "5px",
                alignItems: "center",
                textDecoration: "underline",
                color: "primary.main",
              }}
            >
              <Icon icon="material-symbols:location-on" />
              {event.location}
            </Typography>
          </Link>
        </Box>
        <Box>
          <PrimaryButton onClick={handleRegister}>
            <Icon icon="material-symbols:arrow-circle-left" />
            Register
          </PrimaryButton>
        </Box>
      </Paper>
    </>
  );
};

EventCardNotRegistered.propTypes = {
  event: PropTypes.object.isRequired,
};

export default EventCardNotRegistered;
