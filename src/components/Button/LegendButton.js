import { Button } from "@mui/material";
import React from "react";

const LegendButton = ({ children, ...props }) => {
  return (
    <>
      <Button
        {...props}
        sx={{
          backgroundColor: `${props.bgcolor}`,
          height: "20px",
          borderRadius: "0px",
        }}
        size="small"
        disabled
      >
        {children}
      </Button>
    </>
  );
};

export default LegendButton;
