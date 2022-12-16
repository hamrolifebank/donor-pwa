import React, { useEffect, useState } from "react";
import { useAppAuthContext } from "@contexts/AuthContext";
import { Alert, Box, Button, Typography } from "@mui/material";
import QRCode from "react-qr-code";
import { Container } from "@mui/system";
import { EventPage } from "../event-lists";
import { useOtpContext } from "@contexts/OtpContext";
import { PrimaryButton } from "@components/Button";
import { set } from "date-fns";
import { usePasscodeContext } from "@contexts/PasscodeContext";
import { useRouter } from "next/router";

const Home = () => {
  const { push } = useRouter();
  const { isAppLocked } = usePasscodeContext();

  const { publicAddress, user } = useAppAuthContext();
  const {
    handleClickOpenOtpDialog,
    userPhoneVerification,
    setUserPhoneVerification,
  } = useOtpContext();
  useEffect(() => {
    if (user?.isPhoneVerified) {
      setUserPhoneVerification(
        <Alert severity="info">You can donate now</Alert>
      );
    } else {
      setUserPhoneVerification(
        <Alert severity="warning">Click here to verify phone number</Alert>
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <Container>
      {user?.isPhoneVerified === true ? (
        <>{userPhoneVerification}</>
      ) : (
        <Container>
          <Button
            onClick={() => handleClickOpenOtpDialog(user.phone, publicAddress)}
          >
            {userPhoneVerification}
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
