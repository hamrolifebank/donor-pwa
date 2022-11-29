import React from "react";
import PropTypes from "prop-types";
import Iconify from "@components/iconify";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";

const UserInformation = (props) => {
  return (
    <Container>
      <Grid container sx={{ display: "flex", justifyContent: "center" }}>
        <Grid item display="flex" justifyContent="center">
          <Box display="flex" justifyContent="center" gap={2}>
            <Box display="flex" flexDirection="column">
              <Iconify
                icon="eva:phone-call-fill"
                sx={{ color: "primary.main", mb: 2 }}
              ></Iconify>
              <Iconify
                icon="material-symbols:mail"
                sx={{ color: "primary.main", mb: 2 }}
              ></Iconify>
              <Iconify
                icon="game-icons:candles"
                sx={{ color: "primary.main", mb: 2 }}
              ></Iconify>
              <Iconify
                icon="mdi:gender-male-female-variant"
                sx={{ color: "primary.main", mb: 2 }}
              ></Iconify>
            </Box>
            <Box display="flex" flexDirection="column">
              <Typography sx={{ color: "grey.600", mb: 2 }}>
                +977 0889787676
              </Typography>
              <Typography sx={{ color: "grey.600", mb: 2 }}>
                sudesh7443@gmail.com
              </Typography>
              <Typography sx={{ color: "grey.600", mb: 2 }}>
                Jan 02, 2000
              </Typography>
              <Typography sx={{ color: "grey.600", mb: 2 }}>Male</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
UserInformation.propTypes = {};

export default UserInformation;
