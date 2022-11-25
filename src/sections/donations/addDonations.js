import React from "react";
import { Container } from "@mui/system";
import {
  FormControl,
  Grid,
  Typography,
  TextField,
  Box,
  IconButton,
} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { PrimaryButton } from "@components/Button";
import { useState } from "react";
import { useRouter } from "next/router";
import { PATH_DONATIONS } from "@routes/paths";
import { useAppAuthContext } from "@contexts/AuthContext";

const AddDonations = () => {
  const { user, addUser } = useAppAuthContext();
  const { push } = useRouter();
  const [type, setType] = useState("text");
  const [manuallyAddedEvent, setManuallyAddedEvent] = useState({
    id: "",
    name: "",
    date: "",
    location: "",
    pintsDonated: "",
    isRegistered: false,
    isDonated: true,
    isVerified: false,
    manuallyAdded: true,
  });

  const handleInputField = (e) => {
    const { name, value } = e.target;
    setManuallyAddedEvent({ ...manuallyAddedEvent, [name]: value });
  };

  const handleSubmit = () => {
    user.events.push(manuallyAddedEvent);
    addUser(user);
    push(PATH_DONATIONS.root);
  };

  const arrowBack = () => {
    push(PATH_DONATIONS.root);
  };

  return (
    <Container>
      <IconButton color="primary" onClick={arrowBack}>
        <ArrowBackIosIcon />
      </IconButton>
      <Typography variant="h2" sx={{ pl: 2 }}>
        Add donation event{" "}
      </Typography>
      <FormControl>
        <Box sx={{ p: 2 }}>
          <Grid container item xs={12} spacing={2}>
            <Grid item={true} xs={12} md={7}>
              <TextField
                id="name"
                name="name"
                value={manuallyAddedEvent.name}
                onChange={handleInputField}
                label="Event name"
                type="text"
                size="small"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircleIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item={true} xs={12} md={7}>
              <TextField
                id="date"
                label="Event date"
                name="date"
                value={manuallyAddedEvent.date}
                onChange={handleInputField}
                type={type}
                onFocus={() => setType("date")}
                size="small"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <CalendarMonthIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item={true} xs={12} md={7}>
              <TextField
                id="location"
                label="Event location"
                name="location"
                value={manuallyAddedEvent.location}
                onChange={handleInputField}
                size="small"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocationOnIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item={true} xs={12} md={7}>
              <TextField
                id="pintsdonated"
                label="Pints donated"
                name="pintsdonated"
                size="small"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <VolunteerActivismIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item={true} xs={12} md={7}>
              <PrimaryButton onClick={handleSubmit}>Add</PrimaryButton>
            </Grid>
          </Grid>
        </Box>
      </FormControl>
    </Container>
  );
};

export default AddDonations;
