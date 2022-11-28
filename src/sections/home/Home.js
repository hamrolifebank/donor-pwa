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
import { EventPage } from "../event-lists";
import { PrimaryButton } from "@components/Button";
import { set } from "date-fns";

const Home = () => {
  const { push } = useRouter();

  const { publicAddress, user } = useAppAuthContext();
  const [open, setOpen] = useState(false);
  const [otpNotification, setotpNotification] = useState("");
  useEffect(() => {
    if (user) {
      setotpNotification(`Enter the OTP we sent +${user.phone}`);
    }
  }, []);

  const handleClickOpen = () => {
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
          <Button onClick={handleClickOpen}>
            {" "}
            <Alert severity="warning">Click here to verify phone number</Alert>
          </Button>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>
              <Alert severity="warning">Verify Phone Number</Alert>
            </DialogTitle>
            <DialogContent>
              <DialogContentText>{otpNotification}</DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                fullWidth
                variant="standard"
              />
              <PrimaryButton onClick={handleOtpSubmit}>Submit</PrimaryButton>
            </DialogContent>
            <DialogActions>
              <ButtonGroup>
                <Button onClick={handleResend}>Resend</Button>
                <Button onClick={handleClose}>Cancel</Button>
              </ButtonGroup>
            </DialogActions>
          </Dialog>
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
      <EventPage />
    </Container>
  );
};
export default Home;
