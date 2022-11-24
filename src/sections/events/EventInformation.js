import { PrimaryButton } from "@components/Button";
import { useAppContext } from "@contexts/AppContext";
import { Typography, Grid, CircularProgress, Chip } from "@mui/material";
import { Box, Container, display } from "@mui/system";
import React, { useEffect, useState } from "react";
import Radial from "./Radial";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";

const handleRegister = () => {
  console.log("handle registered clicked");
};

const EventInformation = ({ clickedEvents }) => {
  const events = clickedEvents;
  const currentDate = new Date();
  const eventdate = new Date(events.date);
  if (currentDate >= eventdate) {
    events.is_closed = true;
  }
  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  let chipLabel = events.is_closed ? "Closed" : "Active";
  let chipColor = chipLabel === "Active" ? "success.main" : "warning.main";
  let chipTextColor = chipLabel === "Active" ? "grey.0" : "grey.800";

  return (
    <Container>
      <Box sx={{ display: "flex", justifyContent: "space-between" }} mb={1}>
        <Typography variant="h6">{events.name}</Typography>{" "}
        <Chip
          label={chipLabel}
          sx={{
            p: "0px 6px",
            backgroundColor: `${chipColor}`,
            color: `${chipTextColor}`,
          }}
        />
      </Box>
      <Grid container item xs={12} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={8}>
          <Typography variant="body2">
            {eventdate.toLocaleDateString("en-US", options)}
          </Typography>
          <Typography variant="body2">
            {events.startTime} - {events.endTime}
          </Typography>
        </Grid>
        <Box>
          <PrimaryButton onClick={handleRegister} sx={{ p: "3px 11px" }}>
            Register
          </PrimaryButton>
        </Box>
      </Grid>
      <Grid
        container
        item
        xs={12}
        justifyContent="space-between"
        alignItems="center"
      >
        {" "}
        <Grid item xs={8}>
          <Typography variant="h4">Total pints collected</Typography>
        </Grid>
        <Grid item xs={4}>
          <Radial />
        </Grid>
      </Grid>

      <Grid container item xs={12}>
        <Grid item xs={6}>
          <Typography>
            {" "}
            <Icon icon="material-symbols:person" />
            {" " + events.contactname}
          </Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography>
            <Icon icon="material-symbols:call-sharp" />
            {" " + events.phone}
          </Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography>
            <Icon icon="zondicons:target" />
            {" " + events.target}
          </Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography>
            <Icon icon="mdi:locations" />
            {" " + events.location}
          </Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography>
            <Icon icon="ooui:user-group-rtl" />
            {" " + "Blood partner"}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default EventInformation;
