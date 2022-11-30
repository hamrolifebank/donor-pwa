import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const initialState = {
  data: "",
  msg: "",
};

const OtpApiContext = createContext({
  ...initialState,
  getResponseData: () => {},
});

OtpApiProvider.propTypes = {
  children: PropTypes.node,
};

function OtpApiProvider({ children }) {
  const [responseData, setResponseData] = useState(initialState);

  const getResponseData = (avialiableData) => {
    setResponseData({
      data: avialiableData.data.response.data,
      msg: avialiableData.data.response.msg,
    });
  };

  const contextValue = {
    ...responseData,
    getResponseData,
  };

  return (
    <OtpApiContext.Provider value={contextValue}>
      {children}
    </OtpApiContext.Provider>
  );
}

export { OtpApiContext, OtpApiProvider };
export const useOtpApiContext = () => useContext(OtpApiContext);
