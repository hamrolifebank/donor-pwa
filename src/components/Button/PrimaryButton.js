import { Button } from "@mui/material";
import React from "react";

const PrimaryButton = ({ children, ...props }) => {
  return (
    <>
      <Button
        variant="contained"
        sx={{ marginTop: 2, marginBottom: 2 }}
        fullWidth
        {...props}
      >
        {children}
      </Button>
    </>
  );
};

export default PrimaryButton;
