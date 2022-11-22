import React from "react";
import PropTypes from "prop-types";
import { Box, Button, Paper, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import { Icon } from "@iconify/react";

const EventCard = ({ event }) => {
  const user = {
    name: "sudesh",
    email: "lfjsdlksfls@jflsdjf",
    phone: "9801230045",
    bloodGroup: "A+",
    registeredEvents: [
      { id: "634fc82ab6256678c904c82b" },
      { id: "634fc82ab6256678c904c82c" },
    ],
  };

  const theme = useTheme();
  return (
    <>
      <Paper
        sx={{
          display: "flex",

          justifyContent: "space-between",

          padding: "12px 20px 12px 12px",

          backgroundColor: theme.palette.background.paper,
        }}
      >
        <Box sx={{}}>
          <Typography
            sx={{
              fontSize: "subtitle1.fontSize",
              fontWeight: "subtitle1.fontWeight",
              lineHeight: "subtitle1.lineHeight",
            }}
          >
            {event.name}
          </Typography>
          <Typography
            sx={{
              fontSize: "subtitle2.fontSize",
              color: "grey.600",
              display: "flex",
              gap: "5px",
            }}
          >
            <Icon icon="mdi:clock-time-eight-outline" />
            {event.date.slice(0, 10)}
          </Typography>

          <Typography
            sx={{
              fontSize: "subtitle2.fontSize",
              display: "flex",
              gap: "5px",
              textDecoration: "underline",
              color: "primary.main",
            }}
          >
            <Icon icon="material-symbols:location-on" />
            {event.location}
          </Typography>
        </Box>

        {user.registeredEvents.find((e) => e.id === event.id) ? (
          <Box sx={{ mr: 3 }}>
            <Button
              variant="contained"
              sx={{
                display: "flex",

                //   justifyContent: "center",
                //   alignItems: "center",
                //   padding: "4px 10px",
                gap: "8px",

                //   height: "30px",
                backgroundColor: "grey.600",
                borderRadius: "8px",
              }}
            >
              <Icon icon="material-symbols:arrow-circle-left" />
              Registered
            </Button>
          </Box>
        ) : (
          <Box sx={{ mr: 3 }}>
            <Button
              variant="contained"
              sx={{
                display: "flex",

                //   justifyContent: "center",
                //   alignItems: "center",
                //   padding: "4px 10px",
                gap: "8px",

                // height: "30px",

                borderRadius: "8px",
              }}
            >
              <Icon icon="material-symbols:arrow-circle-left" />
              Register
            </Button>
          </Box>
        )}
      </Paper>
    </>
  );
};

EventCard.propTypes = {};

export default EventCard;
