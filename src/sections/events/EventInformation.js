import { PrimaryButton } from "@components/Button";
import { Typography, Grid, CircularProgress, Chip } from "@mui/material";
import { Box, Container, display } from "@mui/system";
import React, { useState } from "react";
import Radial from "./Radial";
import { Icon } from "@iconify/react";
import { useAppAuthContext } from "@contexts/AuthContext";

const EventInformation = ({ clickedEvents }) => {
  const { addEventInUser } = useAppAuthContext();
  const [register, setRegister] = useState("Register");
  const [registerColor, setRegisterColor] = useState("primary.main");

  const handleRegister = (selectedEvent) => {
    setRegister("Registered");
    setRegisterColor("grey.400");
    addEventInUser(selectedEvent);
  };

  const selectedEvent = clickedEvents;
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

  let chipLabel = selectedEvent.is_closed ? "Closed" : "Active";
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
  }, []);

  return (
    <Container>
      <Box sx={{ display: "flex", justifyContent: "space-between" }} mb={1}>
        <Typography variant="h6">{selectedEvent.name}</Typography>{" "}
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
