import { PrimaryButton } from "@components/Button";
import { useAppContext } from "@contexts/AppContext";
import { Typography, Grid, CircularProgress, Chip } from "@mui/material";
import { Box, Container, display } from "@mui/system";
import React, { useState } from "react";
import Radial from "./Radial";
import { Icon } from "@iconify/react";

const handleRegister = () => {
  console.log("handle registered clicked");
};

const EventInformation = () => {
  const { events } = useAppContext();
  const currentDate = new Date();
  const eventdate = new Date(events[0].date);
  if (currentDate >= eventdate) {
    events[0].is_closed = true;
  }
  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  let chipLabel = !events[0].is_closed ? "Active" : "Closed";
  let chipColor = chipLabel === "Active" ? "success" : "grey";
  return (
    <Container>
      <Box display="flex" gap={3}>
        <Typography variant="h6" sx={{ m: "0px 0px 0px 20px" }}>
          {events[0].name}
        </Typography>{" "}
        <Chip
          label={chipLabel}
          color={chipColor}
          sx={{ m: "3px 0px 0px 40px", p: "0px 6px" }}
        />
      </Box>
      <Grid container item xs={12}>
        <Grid item xs={8}>
          <Typography variant="body2" sx={{ m: "0px 20px auto" }}>
            {eventdate.toLocaleDateString("en-US", options)}
          </Typography>
          <Typography variant="body2" sx={{ m: "0px 20px auto" }}>
            {events[0].startTime} - {events[0].endTime}
          </Typography>
        </Grid>

        <Box display="flex" justifyContent="flex-end">
          <PrimaryButton
            onClick={handleRegister}
            sx={{ m: "7px 0px 10px 30px", p: "3px 11px" }}
          >
            Register
          </PrimaryButton>
        </Box>
      </Grid>
      <Grid container item xs={12}>
        <Grid item xs={8} sx={{ p: "28px 0px 0px 25px" }}>
          <Typography variant="h4">Total pints collected</Typography>
        </Grid>
        <Grid item xs={4}>
          <Radial />
        </Grid>
      </Grid>

      <Grid container item xs={12} sx={{ pl: "10px" }}>
        <Grid item xs={6}>
          <Typography>
            {" "}
            <Icon icon="material-symbols:person" />
            {" " + events[0].contactname}
          </Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography>
            <Icon icon="material-symbols:call-sharp" />
            {" " + events[0].phone}
          </Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography>
            <Icon icon="zondicons:target" />
            {" " + events[0].target}
          </Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography>
            <Icon icon="mdi:locations" />
            {" " + events[0].location}
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
