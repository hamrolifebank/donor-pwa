import React from "react";
import PropTypes from "prop-types";
import GuestGuard from "@guards/GuestGuard";
import { LoginPage } from "@components/LoginPage";
import DashboardLayout from "@layouts/dashboard/DashboardLayout";
import Page from "@components/Page";

const PAGE_TITLE = "Login";

Login.getLayout = (page) => (
  <DashboardLayout pageTitle={PAGE_TITLE}>{page}</DashboardLayout>
);

export default function Login() {
  return (
    <Page title={PAGE_TITLE}>
      <LoginPage />
    </Page>
  );
}
