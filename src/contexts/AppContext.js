import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { EventService } from "@services/index";
import { sendRequestForOTP } from "@services/otp";

const initialState = {
  events: [],
  open: false,
};
const AppContext = createContext({
  ...initialState,
  handleClickOpenOtpDialog: () => {},
  handleClickCloseOtpDialog: () => {},
});

AppProvider.propTypes = {
  children: PropTypes.node,
};

function AppProvider({ children }) {
  const [appState, setAppState] = useState(initialState);
  const [open, setOpen] = useState(false);

  const handleClickOpenOtpDialog = async (phoneNum) => {
    setAppState((prev) => ({ ...prev, open: true }));
    sendRequestForOTP(phoneNum);
  };

  const handleClickCloseOtpDialog = () => {
    setAppState((prev) => ({ ...prev, open: false }));
  };

  useEffect(() => {
    const callEvent = async () => {
      const events = await EventService.getEvents();
      const eventList = events.data;
      setAppState((prev) => ({ ...prev, events: [...eventList] }));
    };
    callEvent();
  }, []);

  const contextValue = {
    open,
    ...appState,
    handleClickOpenOtpDialog,
    handleClickCloseOtpDialog,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}
export { AppContext, AppProvider };
export const useAppContext = () => useContext(AppContext);
