import PropTypes from "prop-types";
import { useState, useEffect } from "react";
// next
import { useRouter } from "next/router";
// components
import LoadingScreen from "../components/LoadingScreen";
//
import Login from "@pages/auth/login";
import { useAppAuthContext } from "@contexts/AuthContext";

import { LoginPage } from "@components/LoginPage";
import Page from "@components/Page";
import { PATH_AUTH } from "@routes/paths";

// ----------------------------------------------------------------------

AuthGuard.propTypes = {
  children: PropTypes.node,
};

// Wrap this for all pages that require authentication

export default function AuthGuard({ children }) {
  const { isAuthenticated, isInitialized } = useAppAuthContext();

  const { push } = useRouter();

  useEffect(() => {
    if (!isAuthenticated && isInitialized) {
      push(PATH_AUTH.login);
    }
  }, [isAuthenticated, isInitialized]);

  if (!isInitialized) {
    return <LoadingScreen />;
  }

  return <>{children}</>;
}
