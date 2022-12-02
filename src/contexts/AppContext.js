import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import PropTypes from "prop-types";
import { arEG } from "date-fns/locale";
import getApi from "@services/client";

const initialState = {
  events: [],
  stats: [
    {
      groupBy: "bloodGroup",
      label: "Blood Group",
      data: [
        { value: 4, label: "A+", color: "#FFAB00" },
        { value: 1, label: "B+", color: "#CF3D3C" },
        { value: 4, label: "AB+", color: "#00B8D9" },
        { value: 3, label: "O+", color: "#FF5630" },
      ],
    },
    {
      groupBy: "age",
      label: "Age Group",
      data: [
        { value: 6, label: "18 - 29", color: "#FFAB00" },
        { value: 3, label: "30 - 39", color: "#CF3D3C" },
        { value: 2, label: "40 - 49", color: "#FFDC00" },
        { value: 1, label: "50 - 59", color: "#FF5630" },
      ],
    },
    {
      groupBy: "gender",
      label: "Genderwise",
      data: [
        { value: 7, label: "Male", display: "Male", color: "#FFAB00" },
        { value: 5, label: "Female", display: "Female", color: "#FF5630" },
        { label: "Others", value: 2, display: "Other", color: "#FFDC00" },
      ],
    },
  ],
  isGraphDataAvailable: true,
};
const AppContext = createContext(initialState);

AppProvider.propTypes = {
  children: PropTypes.node,
};

function AppProvider({ children }) {
  const [appState, setAppState] = useState(initialState);
  useEffect(() => {
    const callEvent = async () => {
      const events = await getApi();
      setAppState((prev) => ({ ...prev, events: [...events] }));
    };
    callEvent();
  }, []);

  const changeGraphData = useCallback(() => {
    setAppState((prev) => ({ ...prev, isGraphDataAvailable: false }));
  }, []);
  const contextValue = {
    ...appState,
    changeGraphData,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}
export { AppContext, AppProvider };
export const useAppContext = () => useContext(AppContext);
