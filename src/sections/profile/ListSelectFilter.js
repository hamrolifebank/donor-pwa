import { MenuItem, TextField } from "@mui/material";
import PropTypes from "prop-types";

const ListSelectFilter = ({ label, options, value, name, onChange }) => {
  return (
    <TextField
      fullWidth
      name={name}
      select
      label={label}
      value={value}
      onChange={onChange}
      SelectProps={{
        MenuProps: {
          sx: { "& .MuiPaper-root": { maxHeight: 260 } },
        },
      }}
      sx={{
        maxWidth: { sm: 240 },
        textTransform: "capitalize",
      }}
    >
      {options.map((option, index) => (
        <MenuItem
          key={index}
          value={option}
          sx={{
            mx: 1,
            my: 0.5,
            borderRadius: 0.75,
            typography: "body2",
            textTransform: "capitalize",
          }}
        >
          {option}
        </MenuItem>
      ))}
    </TextField>
  );
};
export default ListSelectFilter;
