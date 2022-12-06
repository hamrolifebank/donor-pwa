import { EventService } from "@services/index.js";
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

  const changeGraphData = useCallback(() => {
    setAppState((prev) => ({ ...prev, isGraphDataAvailable: false }));
  });

  const fetchEventDetails = useCallback(async (id) => {
    const bloodGroupRes = await EventService.getStats(id, "bloodgroup");
    console.log(bloodGroupRes);
    const ageRes = await EventService.getStats(id, "age");
    const genderRes = await EventService.getStats(id, "gender");
    const Stats = initialState.stats;
    Stats[0].data = bloodGroupRes.data;

    Stats[1].data = ageRes.data;

    Stats[2].data = genderRes.data;

    setEventState((prev) => ({
      ...prev,
      stats: Stats,
    }));
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
