import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import PropTypes from "prop-types";
import { arEG } from "date-fns/locale";
import { getEvents } from "@services/events";
import { EventService } from "@services/index";
import {
  getApiStatsBloodgroup,
  getApiStatsAge,
  getApiStatsGender,
} from "@services/client";

const initialState = {
  events: [],
};
const AppContext = createContext(initialState);

AppProvider.propTypes = {
  children: PropTypes.node,
};

function AppProvider({ children }) {
  const [appState, setAppState] = useState(initialState);
  useEffect(() => {
    const callEvent = async () => {
      const events = await EventService.getEvents();
      const eventList = events.data;
      setAppState((prev) => ({ ...prev, events: [...eventList] }));
    };
    callEvent();

    // const callAgeStat = async () => {
    //   const age = await getApiStatsBloodgroup();

    //   setAppState((prev) => ({
    //     ...prev,
    //     stats: [{ groupBy: "age", data: [...age] }],
    //   }));
    // };
    // callAgeStat();
  }, []);
  console.log(appState);
  //R
  // const fetchEvents = useCallback(async()=>{
  //   const response =await  EventService.getEvents()
  //   const formatted = response.data
  //   setAppState(prev=>({
  //     events:formatted
  //   }))
  // }),[]

  const changeGraphData = useCallback(() => {
    setAppState((prev) => ({ ...prev, isGraphDataAvailable: false }));
  }, []);
  const contextValue = {
    ...appState,
    changeGraphData,
    // fetchEvents,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}
export { AppContext, AppProvider };
export const useAppContext = () => useContext(AppContext);
