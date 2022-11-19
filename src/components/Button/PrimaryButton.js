import { Button } from "@mui/material";
import React from "react";

const PrimaryButton = ({ children, func }) => {
  return (
    <>
      <Button variant="contained" fullWidth onClick={func}>
        {children}
      </Button>
    </>
  );
};

export default PrimaryButton;
