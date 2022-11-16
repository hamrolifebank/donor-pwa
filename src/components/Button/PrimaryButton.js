import { Button } from "@mui/material";
import React from "react";

const PrimaryButton = ({ children, func }) => {
  return (
    <>
      <Button
        variant="contained"
        sx={{ mt: 2, mb: 2 }}
        fullWidth
        onClick={func}
      >
        {children}
      </Button>
    </>
  );
};

export default PrimaryButton;
