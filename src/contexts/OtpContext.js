import { sendRequestForOTP } from "@services/otp";
import { createContext, useContext, useEffect, useState } from "react";

export const OtpContext = createContext();

export const OtpProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpenOtpDialog = async (phoneNum) => {
    const avialiableData = await sendRequestForOTP(phoneNum);
    console.log(avialiableData);
    setOpen(true);
  };

  const contextValue = {
    open,
    setOpen,
    handleClickOpenOtpDialog,
  };

  return (
    <OtpContext.Provider value={contextValue}>{children}</OtpContext.Provider>
  );
};
export const useOtpContext = () => useContext(OtpContext);
