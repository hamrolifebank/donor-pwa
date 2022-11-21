import { Button } from "@mui/material";
import React from "react";

const PrimaryButton = ({ children, ...props }) => {
  return (
    <>
      <Button
        variant="contained"
        fullWidth
        {...props}
      >
        {children}
      </Button>
    </>
  );
};

export default PrimaryButton;
