import PropTypes from "prop-types";
import { useState, useEffect } from "react";
// next
import { useRouter } from "next/router";
// components
import LoadingScreen from "../components/LoadingScreen";
//
import Login from "@pages/auth/login";
import { useAppAuthContext } from "@contexts/AuthContext";

import { LandingPage } from "@components/LandingPage";

// ----------------------------------------------------------------------

AuthGuard.propTypes = {
  children: PropTypes.node,
};

const certainCondition = true;

// Wrap this for all pages that require authentication

export default function AuthGuard({ children }) {
  // temporary --- remove this
  // if (certainCondition) {
  //   return <>{children}</>;
  // }

  // redirect to login page if not authenticated

  const { isAuthenticated, isInitialized } = useAppAuthContext();

  const { pathname, push } = useRouter();

  const [requestedLocation, setRequestedLocation] = useState(null);

  useEffect(() => {
    if (requestedLocation && pathname !== requestedLocation) {
      push(requestedLocation);
    }
    if (isAuthenticated) {
      setRequestedLocation(null);
    }
  }, [isAuthenticated, pathname, push, requestedLocation]);

  if (!isInitialized) {
    return <LoadingScreen />;
  }

  if (!isAuthenticated) {
    if (pathname !== requestedLocation) {
      setRequestedLocation(pathname);
    }
    return <LandingPage />;
  }

  return <>{children}</>;
}
