import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Box, Button, Paper, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import { Icon } from "@iconify/react";
import { PrimaryButton } from "@components/Button";
import { useAppAuthContext } from "@contexts/AuthContext";
import { useOtpContext } from "@contexts/OtpContext";
import {
  encryptUserForRegistryApp,
  getCurrentUser,
  getPublicKey,
} from "@utils/sessionManager";
import { sendDonorInfoInRegistryApp } from "@services/eventPledgers";

const EventCardNotRegistered = ({ event }) => {
  const theme = useTheme();
  const { user, addUser, addEventInUser } = useAppAuthContext();
  const { handleClickOpenOtpDialog } = useOtpContext();

  const handleRegister = async (e, eventEthAddress, eventid) => {
    // if (!getCurrentUser().isPhoneVerified) {
    //   handleClickOpenOtpDialog(user.phone);
    // }
    // if (getCurrentUser().isPhoneVerified) {
    //   addEventInUser(event);
    // }
    let pledgerinfo = await encryptUserForRegistryApp(eventEthAddress);
    sendDonorInfoInRegistryApp(getPublicKey(), pledgerinfo, eventid);
    // addEventInUser(event);
  };

  return (
    <>
      <Paper
        sx={{
          display: "flex",
          mb: 2,
          justifyContent: "space-between",

          padding: "12px 20px 12px 12px",

          backgroundColor: "grey.200",
        }}
      >
        <Box>
          <Typography
            sx={{
              color: "black",
              fontSize: "subtitle1.fontSize",
              fontWeight: "subtitle1.fontWeight",
              lineHeight: "subtitle1.lineHeight",
            }}
          >
            {event.eventName}
          </Typography>
          <Typography
            sx={{
              fontSize: "subtitle2.fontSize",
              color: "grey.600",
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <Icon icon="mdi:clock-time-eight-outline" />
            {event.startTimeStamp.slice(0, 10)}
          </Typography>

          <Typography
            sx={{
              fontSize: "subtitle2.fontSize",
              display: "flex",
              gap: "5px",
              alignItems: "center",
              textDecoration: "underline",
              color: "primary.main",
            }}
          >
            <Icon icon="material-symbols:location-on" />
            {event.location}
          </Typography>
        </Box>
        <Box>
          <PrimaryButton
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleRegister(e, event.eventEthAddress, event.id);
            }}
          >
            <Icon icon="material-symbols:arrow-circle-left" />
            Register
          </PrimaryButton>
        </Box>
      </Paper>
    </>
  );
};

EventCardNotRegistered.propTypes = {
  event: PropTypes.object.isRequired,
};

export default EventCardNotRegistered;
