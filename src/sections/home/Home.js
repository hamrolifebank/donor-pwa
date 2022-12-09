import React, { useEffect, useState } from "react";
import { useAppAuthContext } from "@contexts/AuthContext";
import { Alert, Box, Button, Typography } from "@mui/material";
import QRCode from "react-qr-code";
import { Container } from "@mui/system";
import { EventPage } from "../event-lists";
import { PrimaryButton } from "@components/Button";
import { set } from "date-fns";
import { usePasscodeContext } from "@contexts/PasscodeContext";
import { useRouter } from "next/router";
import { useAppContext } from "@contexts/AppContext";

const Home = () => {
  const { push } = useRouter();
  const { isAppLocked } = usePasscodeContext();

  const { publicAddress, user } = useAppAuthContext();
  const {
    handleClickOpenOtpDialog,
    userPhoneVerification,
    setUserPhoneVerification,
  } = useAppContext();

  return (
    <Container>
      {user?.isPhoneVerified === true ? (
        <>
          {" "}
          <Alert severity="info">You can donate now</Alert>
        </>
      ) : (
        <Container>
          <Button
            onClick={() => handleClickOpenOtpDialog(user.phone, publicAddress)}
          >
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
