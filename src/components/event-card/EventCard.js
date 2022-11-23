import React from "react";
import PropTypes from "prop-types";
import { Box, Button, Paper, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import { Icon } from "@iconify/react";
import { PrimaryButton } from "@components/Button";

const EventCard = ({ event }) => {
  const user = {
    name: "sudesh",
    email: "lfjsdlksfls@jflsdjf",
    phone: "9801230045",
    bloodGroup: "A+",
    registeredEvents: [{ id: "634fc82ab6256678c904c82b" }],
  };

  const theme = useTheme();
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
        <Box sx={{}}>
          <Typography
            sx={{
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
        </Box>

        {user.registeredEvents.find((e) => e.id === event.id) ? (
          <Box>
            <PrimaryButton disabled>
              <Icon icon="material-symbols:arrow-circle-left" />
              Registered
            </PrimaryButton>
          </Box>
        ) : (
          <Box>
            <PrimaryButton>
              <Icon icon="material-symbols:arrow-circle-left" />
              Register
            </PrimaryButton>
          </Box>
        )}
      </Paper>
    </>
  );
};

EventCard.propTypes = {};

export default EventCard;
