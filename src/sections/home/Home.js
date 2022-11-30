import React, { useEffect, useState } from "react";
import { useAppAuthContext } from "@contexts/AuthContext";
import { Alert, Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/router";
import QRCode from "react-qr-code";
import { Container } from "@mui/system";
import { EventPage } from "../event-lists";
import { PrimaryButton } from "@components/Button";
import { set } from "date-fns";
import { sendRequestForOTP } from "@services/otp/otp";
import { useOtpApiContext } from "@contexts/otpApiContext";

const Home = () => {
  const { push } = useRouter();

  const { data, msg, getResponseData } = useOtpApiContext();
  console.log(data);
  console.log(msg);
  // console.log(typeof getResponseData);
  const { publicAddress, user } = useAppAuthContext();
  const { handleClickOpenOtpDialog } = useOtpContext();

  const handleClickOpen = async (phoneNum) => {
    const avialiableData = await sendRequestForOTP(phoneNum);
    // console.log(avialiableData);
    getResponseData(avialiableData);
    setOpen(true);
  };

  const handleOtpSubmit = () => {};
  const handleResend = () => {
    setotpNotification("We have resent a new OTP");
  };
  const handleClose = () => {
    setOpen(false);
    if (user) {
      setotpNotification(`Enter the OTP we sent to +${user.phone}`);
    }
  };
  return (
    <Container>
      {user?.isPhoneVerified === true ? (
        <Alert severity="info">You can now donate</Alert>
      ) : (
        <Container>
          <Button onClick={handleClickOpenOtpDialog}>
            {" "}
            <Alert severity="warning">Click here to verify phone number</Alert>
          </Button>
        </Container>
      )}

      <Box
        sx={{
          border: 0.1,
          borderRadius: 1,
          p: 1,
        }}
      >
        <Box display="flex" justifyContent="center">
          <QRCode
            title="GeeksForGeeks"
            value={`${publicAddress}`}
            level="M"
            bgColor={"#FFFFFF"}
            fgColor={"#000000"}
            size={150}
            padding={1}
          />
        </Box>

        <Box display="flex" justifyContent="center">
          <Typography variant="caption" sx={{}}>
            {publicAddress}
          </Typography>
        </Box>
      </Box>

      <Box display="flex" justifyContent="center">
        <Typography variant="h3" sx={{ pb: 1 }}>
          {user?.fullname}
        </Typography>
      </Box>
      <EventPage page="home" />
    </Container>
  );
};
export default Home;
