import React from "react";
import PropTypes from "prop-types";
import { Button } from "@mui/material";

const BorderlessButton = ({ children, ...props }) => {
  return (
    <>
      <Button variant="text" {...props}>
        {children}
      </Button>
    </>
  );
};

BorderlessButton.propTypes = {};

export default BorderlessButton;
