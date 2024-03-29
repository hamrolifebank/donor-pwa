import React from "react";
import { useField } from "formik";
import { InputLabel, TextField } from "@mui/material";
import { Box } from "@mui/system";

const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <Box>
      <InputLabel>{label}</InputLabel>
      <TextField sx={{ mb: 2 }} {...field} {...props} fullWidth />
      {meta.touched && meta.error && (
        <div style={{ color: "red" }}>{meta.error}</div>
      )}
    </Box>
  );
};

export default CustomInput;
