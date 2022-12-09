import React from "react";
import { useField } from "formik";
import { InputLabel, Select, TextField } from "@mui/material";

const CustomSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
//   console.log("field", field);
//   console.log("meta", field);

  return (
    <>
      {/* <label>{label}</label> */}
      <InputLabel>{label}</InputLabel>
      {/* <TextField {...props} /> */}
      <Select sx={{mb:2}} {...field} {...props} fullWidth  />
      {/* <select style={{height:60, borderRadius:5, width:350 }} {...field} {...props} /> */}
      {meta.touched && meta.error && <div style={{color:"red"}}>{meta.error}</div>}
    </>
  );
};

export default CustomSelect;
