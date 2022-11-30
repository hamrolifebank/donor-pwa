import { PrimaryButton } from "@components/Button";
import { useAppAuthContext } from "@contexts/AuthContext";
import { useOtpContext } from "@contexts/OtpContext";
import {
  Box,
  Alert,
  Button,
  ButtonGroup,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { color, Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { getCurrentUser } from "@utils/sessionManager";
import {
  reSendVerificationRequestForOTP,
  sendVerificationRequestForOTP,
} from "@services/otp";

const OtpDialog = () => {
  const { open, setOpen } = useOtpContext();
  const [otpNotification, setotpNotification] = useState("");
  const user = getCurrentUser();

  const handleOtpSubmit = () => {
    sendVerificationRequestForOTP();
  };
  const handleResend = () => {
    reSendVerificationRequestForOTP();
    setotpNotification("We have resent a new OTP");
  };
  const handleClose = () => {
    setOpen(false);
    if (user) {
      setotpNotification(`Enter the OTP we sent to +${user.phone}`);
    }
  };

  useEffect(() => {
    if (user) {
      setotpNotification(`Enter the OTP we sent +${user.phone}`);
    }
  }, []);

  return (
    <Dialog open={open} onClose={handleClose}>
      <Container sx={{ backgroundColor: "warning.lighter" }}>
        <DialogTitle>
          <Alert severity="warning" sx={{ backgroundColor: "warning.lighter" }}>
            Verify Phone Number
          </Alert>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>{otpNotification}</DialogContentText>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              "& > :not(style)": { m: 1 },
            }}
          >
            <TextField
              id="demo-helper-text-aligned"
              label="Please enter your OTP"
              sx={{ backgroundColor: "white" }}
            />
          </Box>
          <PrimaryButton onClick={handleOtpSubmit}>Submit</PrimaryButton>
          <DialogActions sx={{ justifyContent: "center" }}>
            <ButtonGroup>
              <Button onClick={handleResend}>Resend</Button>
              <Button onClick={handleClose}>Cancel</Button>
            </ButtonGroup>
          </DialogActions>
        </DialogContent>
      </Container>
    </Dialog>
  );
};

export default OtpDialog;
