import { Alert } from "@mui/material";
import { sendRequestForOTP } from "@services/otp";
import { getCurrentUser } from "@utils/sessionManager";
import { createContext, useContext, useEffect, useState } from "react";

export const OtpContext = createContext();

export const OtpProvider = ({ children }) => {
  const user = getCurrentUser();
  const [open, setOpen] = useState(false);
  const [otpNotification, setotpNotification] = useState("");
  const [userPhoneVerification, setUserPhoneVerification] = useState("");

  const handleClickOpenOtpDialog = async (phoneNum) => {
    setOpen(true);
    sendRequestForOTP(phoneNum);
    setotpNotification(`Enter the OTP we sent to +${user.phone}`);
  };

  const contextValue = {
    open,
    setOpen,
    otpNotification,
    setotpNotification,
    handleClickOpenOtpDialog,
    userPhoneVerification,
    setUserPhoneVerification,
  };

  return (
    <OtpContext.Provider value={contextValue}>{children}</OtpContext.Provider>
  );
};
export const useOtpContext = () => useContext(OtpContext);
