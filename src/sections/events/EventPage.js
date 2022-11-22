import { PrimaryButton } from "@components/Button";
import {
  Button,
  Card,
  CardHeader,
  Typography,
  Grid,
  Icon,
  CircularProgress,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useState } from "react";
// import ReactApexChart from "react-apexcharts";
import Radial from "./Radial";

const handleRegister = () => {
  console.log("handele registered clicked");
};

const EventPage = () => {
  return (
    <Container sx={{ pl: 3 }}>
      <Grid container xs={12}>
        <Grid item xs={8} sx={{ mb: 2 }}>
          <Typography variant="h4"> HLB EVENT TITLE </Typography>
          <Typography fontSize="small">
            HLB EVENT DATE <b> </b>
          </Typography>
          <Typography fontSize="small">
            HLB EVENT Time <b> </b>
          </Typography>
        </Grid>
        <Grid item xs={4} maxWidth>
          <Button> Active</Button>
          <Button> Register</Button>
        </Grid>
      </Grid>

      <Box display="flex" justifyContent="center">
        next box at botton
      </Box>
      <Radial />
    </Container>
  );
};

export default EventPage;
