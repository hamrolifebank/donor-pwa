import React, { useEffect, useState } from "react";
import { useAppAuthContext } from "@contexts/AuthContext";
import {
  Alert,
  Box,
  Button,
  ButtonGroup,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import QRCode from "react-qr-code";
import { Container } from "@mui/system";

import { usePasscodeContext } from "@contexts/PasscodeContext";
import { PrimaryButton } from "@components/Button";

const LockedHome = () => {
  const { push } = useRouter();
  const { publicAddress, user } = useAppAuthContext();

  return (
    <Container>
      <Box>
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
              size={180}
              padding={1}
            />
          </Box>
          <Box display="flex" justifyContent="center">
            <Typography variant="h3" sx={{ pb: 1 }}>
              {user?.fullname}
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Typography variant="caption" sx={{}}>
              {publicAddress}
            </Typography>
          </Box>
        </Box>
      </Box>
      <PrimaryButton onClick={() => push("/passcode")}>
        Unlock wallet
      </PrimaryButton>
    </Container>
  );
};
export default LockedHome;
