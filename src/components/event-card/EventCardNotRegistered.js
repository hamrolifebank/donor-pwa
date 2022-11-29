import React from "react";
import PropTypes from "prop-types";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import { Icon } from "@iconify/react";
import { PrimaryButton } from "@components/Button";
import { useAppAuthContext } from "@contexts/AuthContext";
import Link from "next/link";

const EventCardNotRegistered = ({ event }) => {
  const theme = useTheme();
  const { user, addUser, addEventInUser } = useAppAuthContext();

  const handleRegister = (event) => {
    addEventInUser(event);
  };
  return (
    <>
      <Paper
        sx={{
          mb: 2,
          p: "10px ",
          backgroundColor: "grey.200",
        }}
      >
        <Grid container item xs={12}>
          <Grid item xs={8}>
            <Typography variant="subtitle1" color="black">
              {event.name}
            </Typography>
          </Grid>

          <Grid item xs={4}>
            <PrimaryButton
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleRegister(event);
              }}
              sx={{ height: 35 }}
            >
              <Icon icon="material-symbols:arrow-circle-left" />
              Register
            </PrimaryButton>
          </Grid>
        </Grid>
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
      </Paper>
    </>
  );
};

EventCardNotRegistered.propTypes = {
  event: PropTypes.object.isRequired,
};

export default EventCardNotRegistered;
