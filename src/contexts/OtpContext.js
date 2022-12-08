import { sendRequestForOTP } from "@services/otp";
import { getCurrentUser } from "@utils/sessionManager";
import { createContext, useContext, useEffect, useState } from "react";

export const OtpContext = createContext();

export const OtpProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [userPhoneVerification, setUserPhoneVerification] = useState("");

  const handleClickOpenOtpDialog = async (phoneNum) => {
    const email = getCurrentUser().email;
    setOpen(true);
    sendRequestForOTP(phoneNum, email);
  };

  const contextValue = {
    open,
    setOpen,
    handleClickOpenOtpDialog,
    userPhoneVerification,
    setUserPhoneVerification,
  };

  return (
    <OtpContext.Provider value={contextValue}>{children}</OtpContext.Provider>
  );
};
export const useOtpContext = () => useContext(OtpContext);
