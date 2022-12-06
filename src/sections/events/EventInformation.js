import { PrimaryButton } from "@components/Button";
import {
  Typography,
  Grid,
  CircularProgress,
  Chip,
  IconButton,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import Radial from "./Radial";
import { Icon } from "@iconify/react";
import { useAppAuthContext } from "@contexts/AuthContext";
import { useAppContext } from "@contexts/AppContext";

const EventInformation = ({ clickedEvents }) => {
  const { events } = useAppContext();
  if (!clickedEvents) {
    let eventFromStorage = JSON.parse(localStorage.getItem("slugID"));
    clickedEvents = events.find((event) => event.id === eventFromStorage);
  }
  const { addEventInUser } = useAppAuthContext();
  const [register, setRegister] = useState("Register");
  const [registerColor, setRegisterColor] = useState("primary.main");
  const { changeGraphData } = useAppContext();

  const handleRegister = (selectedEvent) => {
    setRegister("Registered");
    setRegisterColor("grey.400");
    addEventInUser(selectedEvent);
  };

  const selectedEvent = clickedEvents ? clickedEvents : [];
  const currentDate = new Date();
  const eventdate = new Date(selectedEvent.date);
  if (currentDate >= eventdate) {
    selectedEvent.is_closed = true;
  }
  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  let chipLabel = selectedEvent
    ? selectedEvent.is_closed
      ? "Closed"
      : "Active"
    : null;
  let chipColor = chipLabel === "Active" ? "success.main" : "warning.main";
  let chipTextColor = chipLabel === "Active" ? "grey.0" : "grey.800";

  useEffect(() => {
    let alreadyRegistered = JSON.parse(
      localStorage.getItem("user")
    ).events?.find((event) => event.id === selectedEvent.id);

    if (alreadyRegistered) {
      setRegister("Registered");
      setRegisterColor("grey.400");
    }
    if (currentDate >= eventdate) {
      events.is_closed = true;
    } else {
      changeGraphData;
    }
  }, []);

  return (
    <Container>
      <Box sx={{ display: "flex", justifyContent: "space-between" }} mb={1}>
        <Typography variant="h6">{selectedEvent.name}</Typography>{" "}
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
            {selectedEvent.startTime} - {selectedEvent.endTime}
          </Typography>
        </Grid>
        <Box>
          {selectedEvent.is_closed ? (
            ""
          ) : (
            <PrimaryButton
              onClick={() => handleRegister(selectedEvent)}
              sx={{
                p: "3px 11px",
                backgroundColor: `${registerColor}`,
                "&:hover": {
                  backgroundColor: `${registerColor}`,
                },
              }}
            >
              {register}
            </PrimaryButton>
          )}
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
            {" " + selectedEvent.contactname}
          </Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography>
            <Icon icon="material-symbols:call-sharp" />
            {" " + selectedEvent.phone}
          </Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography>
            <Icon icon="zondicons:target" />
            {" " + selectedEvent.target}
          </Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography>
            <Icon icon="mdi:locations" />
            {" " + selectedEvent.location}
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
