import React, { useEffect, useState } from "react";
import { useAppAuthContext } from "@contexts/AuthContext";
import { Alert, Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/router";
import QRCode from "react-qr-code";
import { Container } from "@mui/system";
import { EventPage } from "../event-lists";
import { PrimaryButton } from "@components/Button";
import { set } from "date-fns";
import { useOtpContext } from "@contexts/OtpContext";

const Home = () => {
  const { push } = useRouter();

  const { publicAddress, user } = useAppAuthContext();
  const { handleClickOpenOtpDialog } = useOtpContext();

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
