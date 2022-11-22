import React from "react";
import { useAppAuthContext } from "@contexts/AuthContext";
import { Button, Alert, Box, Typography, Paper } from "@mui/material";
// import { useQRCode } from "react-qrcodes";

import { Container } from "@mui/system";
import shadows from "src/theme/shadows";

const Home = () => {
  const { publicAddress, user } = useAppAuthContext();

  // const [inputRef] = useQRCode({
  //   text: `${publicAddress}`,
  //   options: {
  //     level: "M",
  //     margin: 7,
  //     scale: 1,
  //     width: 260,
  //   },
  // });

  return (
    <Container>
      {user.isVerified === true ? (
        <Alert severity="info">You will be able to donate in</Alert>
      ) : (
        <Alert severity="warning">Click here to verify phone number</Alert>
      )}
      <Box
        justifyContent="center"
        width={500}
        boxShadow={25}
        // height={300}
        sx={{
          border: 0.1,

          p: 1,
          borderRadius: 1,
          // ml: 7,
        }}
      >
        <Box display="flex" justifyContent="center">
          {/* <canvas ref={inputRef} /> */}
          <Typography variant="h6" sx={{ mt: 2 }}>
            This is qr
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center">
          <Typography variant="subtitle3" sx={{ pb: 2 }}>
            {publicAddress}
          </Typography>
        </Box>
      </Box>
      <Box display="flex" justifyContent="center">
        <Typography variant="h3" sx={{ pb: 2 }}>
          {user.fullname}
        </Typography>
      </Box>
    </Container>
  );
};
export default Home;
