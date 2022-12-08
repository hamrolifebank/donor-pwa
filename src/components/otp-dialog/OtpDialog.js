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
import {
  sendRequestForOTP,
  sendVerificationRequestForOTP,
} from "@services/otp";
import { getCurrentUser } from "@utils/sessionManager";

const OtpDialog = () => {
  const { open, setOpen, setUserPhoneVerification } = useOtpContext();
  const { user, changeUserPhoneVerified } = useAppAuthContext();
  const [otpNotification, setotpNotification] = useState(
    `Enter the OTP we sent to +${user?.phone}`
  );
  const [otp, setOtp] = useState(null);

  const handleOtpSubmit = async (otp) => {
    const email = getCurrentUser().email;

    let response = await sendVerificationRequestForOTP(otp, email);
    if (response.status === 200) {
      changeUserPhoneVerified();
      setTimeout(() => {
        setUserPhoneVerification(
          <Alert severity="info">You can donate now</Alert>
        );
      }, 3000);

      setUserPhoneVerification(
        <Alert severity="success">Phone number verified</Alert>
      );
      setotpNotification("");
      setOpen(false);
    } else {
      setotpNotification(response.msg);
    }
  };
  const handleResend = () => {
    const email = getCurrentUser().email;
    const phoneNum = getCurrentUser().phone;
    sendRequestForOTP(phoneNum, email);
    setotpNotification("We have resent a new OTP");
  };
  const handleClose = () => {
    setOpen(false);
    if (user) {
      setotpNotification(`Enter the OTP we sent to +${user.phone}`);
    }
  };

  useEffect(() => {
    setotpNotification(`Enter the OTP we sent +${user?.phone}`);
  }, [user]);

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
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              sx={{ backgroundColor: "white" }}
            />
          </Box>
          <PrimaryButton onClick={() => handleOtpSubmit(otp)}>
            Submit
          </PrimaryButton>
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
