import React from "react";
import PropTypes from "prop-types";
import GuestGuard from "@guards/GuestGuard";
import { LoginPage } from "@sections/landing-page";
import DashboardLayout from "@layouts/dashboard/DashboardLayout";
import Page from "@components/Page";

const Login = (props) => {
  return (
    <Page title={PAGE_TITLE}>
      <GuestGuard>
        <LoginPage />
      </GuestGuard>
    </Page>
  );
};

Login.propTypes = {};

export default Login;
