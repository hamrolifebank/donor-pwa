import { useState } from "react";
import PropTypes from "prop-types";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Switch,
} from "@mui/material";
import { useSettingsContext } from "@components/settings";
import Iconify from "@components/iconify";

const ProfileMenu = (props) => {
  const [checked, setChecked] = useState(["themeMode"]);
  const { onToggleMode } = useSettingsContext();

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (value === "themeMode") {
      onToggleMode();
    }

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  return (
    <>
      {" "}
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        <ListItemButton onClick={handleToggle("themeMode")}>
          {/* <ListItemIcon>
            <WifiIcon />
          </ListItemIcon> */}
          <ListItemText id="switch-list-label-themeMode" primary="Dark Mode" />
          <Switch
            edge="end"
            onChange={handleToggle("themeMode")}
            checked={checked.indexOf("themeMode") !== -1}
            inputProps={{
              "aria-labelledby": "switch-list-label-themeMode",
            }}
          />
        </ListItemButton>
        <ListItemButton>
          {/* <ListItemIcon>
            <WifiIcon />
          </ListItemIcon> */}
          <ListItemText id="switch-list-label-wifi" primary="Backup Wallet" />
          <Iconify icon="akar-icons:chevron-right" />
        </ListItemButton>
        <ListItemButton>
          {/* <ListItemIcon>
            <WifiIcon />
          </ListItemIcon> */}
          <ListItemText id="switch-list-label-wifi" primary="Current Network" />
          <Iconify icon="akar-icons:chevron-right" />
        </ListItemButton>
        <ListItemButton>
          {/* <ListItemIcon>
            <WifiIcon />
          </ListItemIcon> */}
          <ListItemText id="switch-list-label-wifi" primary="Settings" />
          <Iconify icon="akar-icons:chevron-right" />
        </ListItemButton>
      </List>
    </>
  );
};

ProfileMenu.propTypes = {};

export default ProfileMenu;
