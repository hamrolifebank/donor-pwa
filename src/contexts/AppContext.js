import { createContext, useContext, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { arEG } from "date-fns/locale";

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

const initialState = {
  events: events,
  stats: [
    {
      groupBy: "bloodGroup",
      label: "Blood Group",
      data: [
        { count: 4, label: "A+" },
        { count: 1, label: "B+" },
        { count: 4, label: "AB+" },
        { count: 3, label: "O+" },
      ],
    },
    {
      groupBy: "age",
      label: "Age Group",
      data: [
        { label: "Under 18", count: 0 },
        { count: 6, label: "18 - 29" },
        { count: 3, label: "30 - 39" },
        { count: 2, label: "40 - 49" },
        { count: 1, label: "50 - 59" },
        { label: "Over 60", count: 0 },
        { label: "Unknown", count: 0 },
      ],
    },
    {
      groupBy: "gender",
      label: "Genderwise",
      data: [
        { count: 7, label: "M", display: "Male" },
        { count: 5, label: "F", display: "Female" },
        { label: "O", count: 0, display: "Other" },
        { label: "U", count: 0, display: "Unknown" },
      ],
    },
  ],
  isGraphDataAvailable: false,
  changeChartData: () => {},
};
const AppContext = createContext({ ...initialState });

AppProvider.propTypes = {
  children: PropTypes.node,
};

function AppProvider({ children }) {
  const [appState, setAppState] = useState(initialState);
  const [chartData, setChartData] = useState({ ...appState.stats[0] });

  const contextProps = {
    ...appState,
    setChartData,
    appState,
    setAppState,
  };
  return (
    <AppContext.Provider value={contextProps}>{children}</AppContext.Provider>
  );
}
export { AppContext, AppProvider };
export const useAppContext = () => useContext(AppContext);
