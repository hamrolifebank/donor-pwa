import { Button } from "@mui/material";
import React from "react";

const SecondaryButton = ({ children, func }) => {
  return (
    <>
      <Button
        sx={{
          mt: 2,
          border: 1,
          color: "common.black",
        }}
        fullWidth
        onClick={func}
      >
        {children}
      </Button>
    </>
  );
};

export default SecondaryButton;
