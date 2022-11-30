import React from "react";

import Iconify from "@components/iconify";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";

const UserInformation = ({ user }) => {
  const { email, phone, gender, dob } = user;
  return (
    <Container>
      <Grid container sx={{ display: "flex", justifyContent: "center" }}>
        <Grid item display="flex" justifyContent="center">
          <Box display="flex" justifyContent="center" gap={2}>
            <Box display="flex" flexDirection="column">
              <Iconify
                icon="material-symbols:mail"
                sx={{ color: "primary.main", mb: 1 }}
              ></Iconify>
              <Iconify
                icon="eva:phone-call-fill"
                sx={{ color: "primary.main", mb: 1 }}
              ></Iconify>

              <Iconify
                icon="game-icons:candles"
                sx={{ color: "primary.main", mb: 1 }}
              ></Iconify>
              <Iconify
                icon="mdi:gender-male-female-variant"
                sx={{ color: "primary.main", mb: 1 }}
              ></Iconify>
            </Box>
            <Box display="flex" flexDirection="column">
              <Typography variant="h6" sx={{ color: "grey.600", mb: 1 }}>
                {email}
              </Typography>
              <Typography variant="h6" sx={{ color: "grey.600", mb: 1 }}>
                +977 {phone}
              </Typography>

              <Typography variant="h6" sx={{ color: "grey.600", mb: 1 }}>
                {dob}
              </Typography>
              <Typography variant="h6" sx={{ color: "grey.600", mb: 1 }}>
                {gender}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
UserInformation.propTypes = {};

export default UserInformation;
