import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { getList } from "./service";

const intialState = {
  sth: "sth",
  sdas: 123,
  changeSth: () => {},
  list: [],
  getListData: () => {},
};

export const ModuleContext = createContext(intialState);

export const ModuleContextProvider = ({ children }) => {
  const [state, setState] = useState(intialState);

  const changeSth = () => {
    setState((prev) => ({ ...prev, sdas: prev.sdas + 1 }));
    //   setState({
    //       ...state,
    //         sth: "u"
    //   })
  };

  console.log("state", state);

  const getListData = useCallback(async () => {
    const res = await getList();
    setState((prev) => ({ ...prev, list: res.data }));
    return res.data;
  }, []);

  const contextValue = useMemo(() => ({
    ...state,
    changeSth,
    getListData,
  }));

  return (
    <ModuleContext.Provider value={contextValue}>
      {children}
    </ModuleContext.Provider>
  );
};

export const useModuleContext = () => useContext(ModuleContext);
