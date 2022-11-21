import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const events = [
  {
    is_closed: false,
    _id: "634fc82ab6256678c904c82b",
    name: "HLB Donor Center #18",
    team: "5c5b1806cb2d0f8f688d7428",
    contactname: "Hamro LifeBank",
    phone: "9801230045",
    target: "10",
    date: "2022-12-09T00:00:00.000Z",
    startTime: "11:00",
    endTime: "14:00",
    location: "Sanepa, Lalitpur ",
    beneficiary: "5bb6067fd59b444c803c4003",
    slug: "2022-11-04-hlb-donor-center-18",
    owner: "5bb752fac800bb022cee5abe",
    created_by: "5c5fceb6306cb25f1174396b",
    updated_by: "5c5fceb6306cb25f1174396b",
    acl: [],
    created_at: "2022-10-19T09:49:30.574Z",
    updated_at: "2022-11-02T06:40:10.703Z",
    v: 0,
    id: "634fc82ab6256678c904c82b",
  },
  {
    is_closed: false,
    _id: "6378c13301aecf4f771ca914",
    name: "Sweta Blood Donation",
    contactname: "Sweta shrestha",
    phone: "9843395450",
    target: "30",
    startTime: "12:00",
    endTime: "16:01",
    location: "Buddha stupa",
    beneficiary: "5bb6067fd59b444c803c4003",
    date: "2022-11-19T00:00:00.000Z",
    team: "5d256dfe83d8725b4a08c600",
    slug: "2022-11-19-sweta-blood-donation",
    owner: "5c5fceb6306cb25f1174396b",
    created_by: "5c5fceb6306cb25f1174396b",
    updated_by: "5c5fceb6306cb25f1174396b",
    acl: [],
    created_at: "2022-11-19T11:42:43.498Z",
    updated_at: "2022-11-19T12:01:40.730Z",
    v: 0,
    id: "6378c13301aecf4f771ca914",
  },
];
const initialState = { events: events };
const AppContext = createContext({ ...initialState });

AppProvider.propTypes = {
  children: PropTypes.node,
};

function AppProvider({ children }) {
  const [appState, setAppState] = useState(initialState);
  const contextProps = { ...appState };
  return (
    <AppContext.Provider value={contextProps}>{children}</AppContext.Provider>
  );
}
export { AppContext, AppProvider };
export const useAppContext = () => useContext(AppContext);
