import PropTypes from "prop-types";
import { useState } from "react";
// @mui
import { Box } from "@mui/material";
// auth
// import AuthGuard from "../../auth/AuthGuard";
// components
import { useSettingsContext } from "@components/settings";
//
import Main from "./Main";
import Header from "./header";
import { BottomNavigation } from "@components/bottom-navigation";
import AuthGuard from "@guards/AuthGuard";

// ----------------------------------------------------------------------

DashboardLayout.propTypes = {
  children: PropTypes.node,
  pageTitle: PropTypes.string.isRequired,
};

export default function DashboardLayout({ pageTitle, children }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const renderContent = () => (
    <>
      <Header onOpenNav={handleOpen} pageTitle={pageTitle} />

      <Box
        sx={{
          display: { lg: "flex" },
          minHeight: { lg: 1 },
        }}>
        {/* <BottomNavigation /> */}

        <Main>{children}</Main>
      </Box>
    </>
  );

  return <AuthGuard> {renderContent()}</AuthGuard>;
}
