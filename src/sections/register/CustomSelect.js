import React from "react";
import { useField } from "formik";
import { TextField } from "@mui/material";

const CustomSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
//   console.log("field", field);
//   console.log("meta", field);

  return (
    <>
      {/* <label>{label}</label> */}
      <select {...field} {...props} />
      {/* <TextField {...props} /> */}
      {meta.touched && meta.error && <div>{meta.error}</div>}
    </>
  );
};

export default CustomSelect;
