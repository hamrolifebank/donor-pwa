import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Button } from "@mui/material";
import { ModuleContext, useModuleContext } from "./context";

const Newfile = (props) => {
  // const v = useContext(ModuleContext);
  const { changeSth, getListData, list } = useModuleContext();

  console.log("list", list);

  useEffect(() => {
    getListData();
    //   return () => {

    //   }
  }, []);

  return (
    <div>
      <Button onClick={changeSth}>New Button</Button>
    </div>
  );
};

Newfile.propTypes = {};

export default Newfile;
