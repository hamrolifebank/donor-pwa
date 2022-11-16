import React from "react";
import { Button } from "@mui/material";

const PrimaryButton = ({ children, func, icon }) => {
  return (
    <Button
      variant="contained"
      sx={{ marginTop: 2, marginBottom: 2, width: 335 }}
      onClick={func}
      startIcon={icon}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
