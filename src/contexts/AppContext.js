import { createContext, useContext, useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { EventService } from "@services/index";

const initialState = {
  events: [],
};
const AppContext = createContext(initialState);

AppProvider.propTypes = {
  children: PropTypes.node,
};

function AppProvider({ children }) {
  const [appState, setAppState] = useState(initialState);

  const callEvent = async () => {
    const events = await EventService.getEvents();
    const eventList = events.data;
    setAppState((prev) => ({ ...prev, events: [...eventList] }));
  };

  const contextValue = useMemo(() => ({
    ...appState,
    callEvent,
  }));

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}
export { AppContext, AppProvider };
export const useAppContext = () => useContext(AppContext);
