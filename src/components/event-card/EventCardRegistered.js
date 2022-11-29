import React from "react";
import PropTypes from "prop-types";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import { Icon } from "@iconify/react";
import { PrimaryButton } from "@components/Button";
import { useAppAuthContext } from "@contexts/AuthContext";
import Link from "next/link";

const EventCardRegistered = ({ event }) => {
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
          <Grid item xs={7}>
            <Typography variant="subtitle1" color="black">
              {event.name}
            </Typography>
          </Grid>
          <Grid item xs={5}>
            <PrimaryButton disabled sx={{ height: 35 }}>
              <Icon icon="material-symbols:arrow-circle-left" />
              Registered
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

EventCardRegistered.propTypes = {
  event: PropTypes.object.isRequired,
};

export default EventCardRegistered;
