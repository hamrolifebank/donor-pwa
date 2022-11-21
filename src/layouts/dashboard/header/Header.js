/* eslint-disable @next/next/no-img-element */
import PropTypes from "prop-types";
// @mui
import { useTheme } from "@mui/material/styles";
import { Stack, AppBar, Toolbar, IconButton } from "@mui/material";
// utils
// config
import { HEADER, NAV } from "../../../config";
// components
import { useSettingsContext } from "../../../components/settings";
//
import AccountPopover from "./AccountPopover";

import BackButton from "./BackButton";
import NotificationsPopover from "./NotificationsPopover";

// ----------------------------------------------------------------------

Header.propTypes = {
  onOpenNav: PropTypes.func,
  pageTitle: PropTypes.string.isRequired,
};

export default function Header({ pageTitle, onOpenNav }) {
  const theme = useTheme();

  const renderContent = (
    <>
      <img
        src="https://assets.rumsan.com/esatya/hlb-navbar-logo.png"
        height={60}
        width={110}
        alt="logo"
      />
      {/* <BackButton />
      {pageTitle} */}
      <Stack
        flexGrow={1}
        direction="row"
        alignItems="center"
        justifyContent="flex-end"
        spacing={{ xs: 0.5, sm: 1.5 }}
      >
        {/* <NotificationsPopover /> */}
        {/* 
        <AccountPopover /> */}
      </Stack>
    </>
  );

  return (
    <AppBar
      sx={{
        boxShadow: "none",
        height: HEADER.H_MOBILE,
        zIndex: theme.zIndex.appBar + 1,
      }}
    >
      <Toolbar
        sx={{
          height: 1,
          px: { lg: 5 },
        }}
      >
        {renderContent}
      </Toolbar>
    </AppBar>
  );
}
