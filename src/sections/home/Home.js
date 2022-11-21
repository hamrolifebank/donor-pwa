import React from "react";
import { useAppAuthContext } from "@contexts/AuthContext";
import { Button, Box, Typography, Paper } from "@mui/material";

import { Container } from "@mui/system";

const Home = () => {
  const { publicAddress, user } = useAppAuthContext();
  return (
    <Container>
      <Box display="flex" justifyContent="center">
        <Typography variant="subtitle3" sx={{ pb: 2 }}>
          {user.fullname}
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center">
        <Typography variant="subtitle3" sx={{ pb: 2 }}>
          {publicAddress}
        </Typography>
      </Box>
    </Container>
  );
};
export default Home;
