import React from "react";
import { Box, Container, Typography } from "@mui/material";
import PropTypes from "prop-types";

const Notification = (props) => {
  return (
    <Container>
      <Box display="flex" justifyContent="space-between">
        <Typography>Cancel</Typography>
        <Typography>Done</Typography>
      </Box>
    </Container>
  );
};

Notification.propTypes = {};

export default Notification;
