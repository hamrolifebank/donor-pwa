import React from "react";
import { useField } from "formik";
import { InputLabel, Select } from "@mui/material";

const CustomSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <InputLabel>{label}</InputLabel>
      <Select sx={{ mb: 2 }} {...field} {...props} fullWidth />
      {meta.touched && meta.error && (
        <div style={{ color: "red" }}>{meta.error}</div>
      )}
    </>
  );
};

export default CustomSelect;
