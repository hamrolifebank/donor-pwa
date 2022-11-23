import React from "react";
import { useAppAuthContext } from "@contexts/AuthContext";
import { Alert, Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import QRCode from "react-qr-code";
import { Container } from "@mui/system";
import { EventPage } from "../event-lists";

const Home = () => {
  const { publicAddress, user } = useAppAuthContext();
  const { push } = useRouter();

  return (
    <Container>
      {user?.isPhoneVerified === true ? (
        <Alert severity="info">You can now donate</Alert>
      ) : (
        <Alert severity="warning">Click here to verify phone number</Alert>
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
      <EventPage />
    </Container>
  );
};
export default Home;
