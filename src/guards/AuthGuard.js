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

// ----------------------------------------------------------------------

AuthGuard.propTypes = {
  children: PropTypes.node,
};

// Wrap this for all pages that require authentication

export default function AuthGuard({ children }) {
  // temporary --- remove this
  // if (certainCondition) {
  //   return <>{children}</>;
  // }

  // redirect to login page if not authenticated

  const { isAuthenticated, isInitialized, user } = useAppAuthContext();

  const { pathname, push } = useRouter();

  // const [requestedLocation, setRequestedLocation] = useState(null);

  // useEffect(() => {
  //   if (requestedLocation && pathname !== requestedLocation) {
  //     push(requestedLocation);
  //   }
  //   if (isAuthenticated) {
  //     setRequestedLocation(null);
  //   }
  // }, [isAuthenticated, pathname, push, requestedLocation]);

  useEffect(() => {
    if (!isAuthenticated) {
      // if (pathname !== requestedLocation) {
      //   setRequestedLocation(pathname);
      // }
      // typeof window !== "undefined" && push("/auth/login");
      push("/auth/login");
      // const PAGE_TITLE = "Login";
      // return (
      //   <Page title={PAGE_TITLE}>
      //     <Login />;
      //   </Page>
      // );
    } else if (!user) {
      push("/register");
    } else {
      push("/");
    }
  }, [isAuthenticated, user]);

  // if (!isInitialized) {
  //   return <LoadingScreen />;
  // }

  return <>{children}</>;
}
