import React from "react";
import { useField } from "formik";
import { TextField } from "@mui/material";

const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
//   console.log("field", field);
//   console.log("meta", field);

  return (
    <>
      {/* <label>{label}</label> */}
      <input {...field} {...props} />
      {/* <TextField {...props} /> */}
      {meta.touched && meta.error && <div>{meta.error}</div>}
    </>
  );
};

export default CustomInput;
