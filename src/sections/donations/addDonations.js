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

const AddDonations = () => {
  const [type, setType] = useState("text");

  return (
    <Container>
      <IconButton color="primary">
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
                id="eventname"
                name="eventname"
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
                id="eventdate"
                label="Event date"
                name="eventdate"
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
                id="eventaddress"
                label="Event address"
                name="eventaddress"
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
              <PrimaryButton>Add</PrimaryButton>
            </Grid>
          </Grid>
        </Box>
      </FormControl>
    </Container>
  );
};

export default AddDonations;
