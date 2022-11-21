import { Button } from "@mui/material";
import React from "react";

const SecondaryButton = ({ children, ...props }) => {
  return (
    <>
      <Button
        sx={{
          marginTop: 2,
          border: 1,
          color: "common.black",
          mb: 2,
        }}
        fullWidth
        {...props}
      >
        {children}
      </Button>
    </>
  );
};

export default SecondaryButton;
