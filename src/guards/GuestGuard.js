import PropTypes from "prop-types";
import { useEffect } from "react";
// next
import { useRouter } from "next/router";
// components
import LoadingScreen from "@components/LoadingScreen";
//
import { useAppAuthContext } from "@contexts/AuthContext";
import { PATH_AUTH, PATH_DASHBOARD } from "@routes/paths";
import NewLoadingScreen from "@components/NewLoadingScreen";

// ----------------------------------------------------------------------

GuestGuard.propTypes = {
  children: PropTypes.node,
};

// Wrap this for all pages that donot require authentication(guest user)

export default function GuestGuard({ children }) {
  const { push } = useRouter();

  const { isAuthenticated, isInitialized, user } = useAppAuthContext();

  useEffect(() => {
    if (isAuthenticated && !user) {
      push(PATH_AUTH.register);
    }
    if (isAuthenticated && user) {
      push(PATH_DASHBOARD.root);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, user]);

  if (isInitialized === isAuthenticated) {
    return <NewLoadingScreen />;
  }

  return <> {children} </>;
}
