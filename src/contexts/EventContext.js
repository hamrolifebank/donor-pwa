import { EventService } from "@services";
import PropTypes from "prop-types";
import { createContext, useCallback, useContext, useState } from "react";
const initialState = {
  stats: [
    {
      groupBy: "bloodGroup",
      label: "Blood Group",
      data: [],
    },
    {
      groupBy: "age",
      label: "Age Group",
      data: [],
    },
    {
      groupBy: "gender",
      label: "Genderwise",
      data: [],
    },
  ],
  isGraphDataAvailable: true,
};
const EventContext = createContext(initialState);

EventProvider.propTypes = {
  children: PropTypes.node,
};

function EventProvider({ children }) {
  const [eventState, setEventState] = useState(initialState);

  const fetchEventDetails = useCallback(async () => {
    const response = await EventService.getSingleEvent();
    const formatted = response.data;
    console.log(formatted);
    setEventState((prev) => ({ ...prev, stats: formatted }));
  }, []);

  const contextValue = {
    ...eventState,
    changeGraphData,
    fetchEventDetails,
  };

  return (
    <EventContext.Provider value={contextValue}>
      {children}
    </EventContext.Provider>
  );
}
export { EventContext, EventProvider };
export const useEventContext = () => useContext(EventContext);
