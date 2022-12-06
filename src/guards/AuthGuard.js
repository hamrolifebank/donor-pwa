import PropTypes from "prop-types";
import { useEffect } from "react";
// next
import { useRouter } from "next/router";
// components
import LoadingScreen from "../components/LoadingScreen";
//

import { useAppAuthContext } from "@contexts/AuthContext";

import { PATH_AUTH } from "@routes/paths";
import NewLoadingScreen from "@components/NewLoadingScreen";

// ----------------------------------------------------------------------

AuthGuard.propTypes = {
  children: PropTypes.node,
};

export default function AuthGuard({ children }) {
  const { isAuthenticated, isInitialized } = useAppAuthContext();

  const { push, pathname } = useRouter();

  useEffect(() => {
    if (!isAuthenticated && isInitialized) {
      push(PATH_AUTH.login);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isInitialized]);

  if (isAuthenticated === undefined) {
    return <NewLoadingScreen />;
  } else if (isAuthenticated === false) {
    if (pathname === PATH_AUTH.login) {
      return <>{children}</>;
    } else {
      return <NewLoadingScreen />;
    }
  } else {
    return <>{children}</>;
  }
}
