import { Button } from "@mui/material";
import React from "react";

const SecondaryButton = ({ children, func }) => {
  return (
    <Button
      sx={{
        marginTop: 2,
        width: 335,
        border: 1,
        color: "common.black",
      }}
      onClick={func}
    >
      {children}{" "}
    </Button>
  );
};

export default SecondaryButton;
